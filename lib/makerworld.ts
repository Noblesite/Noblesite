export type MakerWorldProfile = {
  uid: number;
  name: string;
  handle: string;
  avatar?: string;
  bio?: string;
  profileUrl: string;
  likeCount: number;
  collectionCount: number;
  downloadCount: number;
  designCount: number;
  printCount: number;
  pinnedDesignIds: number[];
  designHighlights: MakerWorldDesignSummary[];
};

export type MakerWorldDesignSummary = {
  id: number;
  title: string;
  slug: string;
  coverUrl?: string;
  modelUrl: string;
  likeCount?: number;
  collectionCount?: number;
  downloadCount?: number;
  printCount?: number;
  updatedAt?: string;
  tags: string[];
};

type MakerWorldProfileResponse = {
  uid?: number;
  name?: string;
  handle?: string;
  avatar?: string;
  likeCount?: number;
  collectionCount?: number;
  downloadCount?: number;
  personal?: {
    bio?: string;
    pinnedDesigns?: number[];
    designsInfo?: Array<{
      id?: number;
      title?: string;
      slug?: string;
      cover?: string;
    }>;
  };
  MWCount?: {
    designCount?: number;
    myDesignPrintCount?: number;
  };
};

type MakerWorldDesignResponse = {
  id?: number;
  title?: string;
  slug?: string;
  coverUrl?: string;
  likeCount?: number;
  collectionCount?: number;
  downloadCount?: number;
  printCount?: number;
  updateTime?: string;
  tags?: string[];
};

const MAKERWORLD_USER_ID = 4220773516;
const MAKERWORLD_PROFILE_URL = 'https://makerworld.com/en/@Noblesite';
const MAKERWORLD_API_BASE_URL = 'https://api.bambulab.com/v1';
const MAKERWORLD_REVALIDATE_SECONDS = 21600;

const fallbackDesigns: MakerWorldDesignSummary[] = [
  {
    id: 1787931,
    title: 'Optimus Prime G1 Cosplay Armor',
    slug: 'optimus-prime-g1-cosplay-armor',
    coverUrl: 'https://makerworld.bblmw.com/makerworld/model/USa17a6eb90ceb2e/design/2025-10-21_d1b3c006f4ef38.png',
    modelUrl: 'https://makerworld.com/en/models/1787931-optimus-prime-g1-cosplay-armor',
    tags: ['Cosplay', 'Props', 'Wearable'],
  },
  {
    id: 1816257,
    title: 'Wheel for Transformers One Energon Glow Bumblebee',
    slug: 'wheel-for-transformers-one-energon-glow-bumblebe',
    coverUrl: 'https://makerworld.bblmw.com/makerworld/model/USd7f439124fad3f/design/2025-09-21_738a3a29a718b.jpg',
    modelUrl: 'https://makerworld.com/en/models/1816257-wheel-for-transformers-one-energon-glow-bumblebe',
    tags: ['Repair', 'Toy Parts', 'Functional'],
  },
  {
    id: 2191646,
    title: "Display Stand for Luke Skywalker's Lightsaber",
    slug: 'display-stand-for-luke-skywalker-s-lightsaber',
    coverUrl: 'https://makerworld.bblmw.com/makerworld/model/US480ca91548e543/design/2026-01-02_03fc6339b87d8.jpg',
    modelUrl: 'https://makerworld.com/en/models/2191646-display-stand-for-luke-skywalker-s-lightsaber',
    tags: ['Display', 'Props', 'Stand'],
  },
];

const fallbackProfile: MakerWorldProfile = {
  uid: MAKERWORLD_USER_ID,
  name: 'Noblesite',
  handle: 'Noblesite',
  profileUrl: MAKERWORLD_PROFILE_URL,
  bio: 'Engineer and maker focused on clean, reliable, print-ready designs.',
  likeCount: 0,
  collectionCount: 0,
  downloadCount: 0,
  designCount: fallbackDesigns.length,
  printCount: 0,
  pinnedDesignIds: fallbackDesigns.map((design) => design.id),
  designHighlights: fallbackDesigns,
};

const formatModelUrl = (id: number, slug: string) => `https://makerworld.com/en/models/${id}-${slug}`;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);

const getNumber = (value: unknown, fallback = 0) => (isNumber(value) ? value : fallback);

const getString = (value: unknown, fallback = '') => (typeof value === 'string' ? value : fallback);

const fetchJson = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
      next: {
        revalidate: MAKERWORLD_REVALIDATE_SECONDS,
      },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
};

const normalizeDesign = (design: MakerWorldDesignResponse): MakerWorldDesignSummary | null => {
  const id = getNumber(design.id);
  const title = getString(design.title);
  const slug = getString(design.slug);

  if (!id || !title || !slug) {
    return null;
  }

  return {
    id,
    title,
    slug,
    coverUrl: getString(design.coverUrl) || undefined,
    modelUrl: formatModelUrl(id, slug),
    likeCount: isNumber(design.likeCount) ? design.likeCount : undefined,
    collectionCount: isNumber(design.collectionCount) ? design.collectionCount : undefined,
    downloadCount: isNumber(design.downloadCount) ? design.downloadCount : undefined,
    printCount: isNumber(design.printCount) ? design.printCount : undefined,
    updatedAt: getString(design.updateTime) || undefined,
    tags: Array.isArray(design.tags)
      ? design.tags.filter((tag): tag is string => typeof tag === 'string').slice(0, 3)
      : [],
  };
};

const normalizeProfileDesign = (design: unknown): MakerWorldDesignSummary | null => {
  if (!isRecord(design)) {
    return null;
  }

  const id = getNumber(design.id);
  const title = getString(design.title);
  const slug = getString(design.slug);

  if (!id || !title || !slug) {
    return null;
  }

  return {
    id,
    title,
    slug,
    coverUrl: getString(design.cover) || undefined,
    modelUrl: formatModelUrl(id, slug),
    tags: [],
  };
};

const normalizeProfile = (profile: MakerWorldProfileResponse): MakerWorldProfile | null => {
  const uid = getNumber(profile.uid);
  const handle = getString(profile.handle);
  const name = getString(profile.name, handle || 'Noblesite');

  if (!uid || !handle) {
    return null;
  }

  const pinnedDesignIds = Array.isArray(profile.personal?.pinnedDesigns)
    ? profile.personal.pinnedDesigns.filter((id): id is number => isNumber(id))
    : [];

  const designHighlights = Array.isArray(profile.personal?.designsInfo)
    ? profile.personal.designsInfo
        .map(normalizeProfileDesign)
        .filter((design): design is MakerWorldDesignSummary => Boolean(design))
    : [];

  return {
    uid,
    name,
    handle,
    avatar: getString(profile.avatar) || undefined,
    bio: getString(profile.personal?.bio) || undefined,
    profileUrl: MAKERWORLD_PROFILE_URL,
    likeCount: getNumber(profile.likeCount),
    collectionCount: getNumber(profile.collectionCount),
    downloadCount: getNumber(profile.downloadCount),
    designCount: getNumber(profile.MWCount?.designCount, designHighlights.length),
    printCount: getNumber(profile.MWCount?.myDesignPrintCount),
    pinnedDesignIds,
    designHighlights,
  };
};

export const getMakerWorldProfile = async (): Promise<MakerWorldProfile> => {
  const profile = await fetchJson<MakerWorldProfileResponse>(
    `${MAKERWORLD_API_BASE_URL}/design-user-service/user/profile/${MAKERWORLD_USER_ID}`,
  );

  if (!profile) {
    return fallbackProfile;
  }

  return normalizeProfile(profile) ?? fallbackProfile;
};

export const getMakerWorldDesign = async (designId: number): Promise<MakerWorldDesignSummary | null> => {
  const design = await fetchJson<MakerWorldDesignResponse>(
    `${MAKERWORLD_API_BASE_URL}/design-service/design/${designId}`,
  );

  return design ? normalizeDesign(design) : null;
};

export const getMakerWorldPinnedDesigns = async (profile: MakerWorldProfile): Promise<MakerWorldDesignSummary[]> => {
  if (profile.pinnedDesignIds.length === 0) {
    return profile.designHighlights.length > 0 ? profile.designHighlights : fallbackDesigns;
  }

  const designs = await Promise.all(
    profile.pinnedDesignIds.slice(0, 8).map((designId) => getMakerWorldDesign(designId)),
  );
  const availableDesigns = designs.filter((design): design is MakerWorldDesignSummary => Boolean(design));

  if (availableDesigns.length > 0) {
    return availableDesigns;
  }

  return profile.designHighlights.length > 0 ? profile.designHighlights : fallbackDesigns;
};
