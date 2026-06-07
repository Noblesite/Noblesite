import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import MakerWorldIcon from '@/components/MakerWorldIcon';
import { getMakerWorldPinnedDesigns, getMakerWorldProfile } from '@/lib/makerworld';
import { profileLinks } from '@/lib/profile-links';

const printFocus = [
  'Functional prints and utility pieces',
  'Prototype parts for desk, shop, and lab workflows',
  'Maker experiments tied back to software, automation, and hardware tinkering',
];

const formatNumber = (value: number) => new Intl.NumberFormat('en-US').format(value);

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(value));

export default async function PrintingPage() {
  const profile = await getMakerWorldProfile();
  const pinnedDesigns = await getMakerWorldPinnedDesigns(profile);

  const profileStats = [
    { label: 'published designs', value: profile.designCount },
    { label: 'downloads', value: profile.downloadCount },
    { label: 'collections', value: profile.collectionCount },
    { label: 'successful prints', value: profile.printCount },
  ].filter((stat) => stat.value > 0);

  return (
    <section className="bg-zinc-50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">MakerWorld</p>
            <h2 className="mt-2 text-4xl font-bold text-zinc-950">3D Printing</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-700">
              My 3D printing work lives on MakerWorld, where I publish and collect models that support practical
              builds, prototypes, and the occasional idea that starts as a sketch and ends as plastic.
            </p>
            <a
              href={profileLinks.makerworld}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-950"
            >
              <MakerWorldIcon className="w-8 brightness-0 invert" />
              Open MakerWorld Profile
              <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-md bg-zinc-950">
                {profile.avatar ? (
                  <Image
                    src={profile.avatar}
                    alt={`${profile.name} MakerWorld avatar`}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <MakerWorldIcon className="w-12" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-950">{profile.name} on MakerWorld</h3>
                <p className="text-sm text-zinc-600">Models, collections, and print-focused experiments.</p>
              </div>
            </div>

            {profile.bio ? <p className="mt-5 text-sm leading-6 text-zinc-600">{profile.bio}</p> : null}

            {profileStats.length > 0 ? (
              <div className="mt-6 grid grid-cols-2 gap-3">
                {profileStats.map((stat) => (
                  <div key={stat.label} className="rounded-md bg-zinc-100 px-4 py-3">
                    <p className="text-xl font-bold text-zinc-950">{formatNumber(stat.value)}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            ) : null}

            <ul className="mt-6 space-y-3">
              {printFocus.map((item) => (
                <li key={item} className="rounded-md bg-zinc-100 px-4 py-3 text-sm font-medium text-zinc-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Pinned from MakerWorld</p>
            <h3 className="mt-2 text-3xl font-bold text-zinc-950">Featured 3D projects</h3>
            <p className="mt-4 text-base leading-7 text-zinc-700">
              These cards pull from my public MakerWorld profile and pinned design list, then cache on the site so new
              maker work can surface without hand-editing the page.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pinnedDesigns.map((design) => (
              <a
                key={design.id}
                href={design.modelUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[26rem] flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] bg-zinc-100">
                  {design.coverUrl ? (
                    <Image
                      src={design.coverUrl}
                      alt={`${design.title} MakerWorld project cover`}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-zinc-950">
                      <MakerWorldIcon className="w-16" />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-bold leading-6 text-zinc-950 group-hover:text-teal-700">
                        {design.title}
                      </h4>
                      <FaExternalLinkAlt className="mt-1 shrink-0 text-xs text-zinc-400" aria-hidden="true" />
                    </div>

                    {design.tags.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {design.tags.map((tag) => (
                          <span key={tag} className="rounded bg-teal-50 px-2 py-1 text-xs font-semibold text-teal-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-600">
                    {typeof design.downloadCount === 'number' ? (
                      <span>{formatNumber(design.downloadCount)} downloads</span>
                    ) : null}
                    {typeof design.printCount === 'number' ? (
                      <span>{formatNumber(design.printCount)} prints</span>
                    ) : null}
                    {design.updatedAt ? <span>Updated {formatDate(design.updatedAt)}</span> : null}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-teal-100 bg-white p-5 text-sm leading-6 text-zinc-600 shadow-sm">
            MakerWorld does not currently provide a GitHub-style official public API, so this page uses cached public
            profile and design metadata with static fallbacks if the service changes.
          </div>
        </div>
      </div>
    </section>
  );
}
