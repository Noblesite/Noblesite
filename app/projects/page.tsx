import { FaGithub, FaStar } from 'react-icons/fa';
import { profileLinks } from '@/lib/profile-links';

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
  topics?: string[];
};

async function getRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch('https://api.github.com/users/Noblesite/repos?sort=updated&per_page=12', {
      headers: {
        Accept: 'application/vnd.github+json',
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return [];
    }

    const repos = (await response.json()) as GitHubRepo[];

    return repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  } catch {
    return [];
  }
}

export default async function Projects() {
  const repos = await getRepos();

  return (
    <section className="bg-slate-50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Live from GitHub</p>
          <h2 className="mt-2 text-4xl font-bold text-slate-950">Projects</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            This page pulls from my public GitHub profile, so newly published work appears here without another
            hand-edited site update.
          </p>
          <a
            href={profileLinks.github}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <FaGithub aria-hidden="true" />
            View GitHub Profile
          </a>
        </div>

        {repos.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-56 flex-col justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-700">{repo.name}</h3>
                    <FaGithub className="mt-1 shrink-0 text-xl text-slate-500" aria-hidden="true" />
                  </div>
                  <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">
                    {repo.description ?? 'Public repository from my GitHub profile.'}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
                  {repo.language ? <span className="rounded bg-blue-50 px-2 py-1 text-blue-700">{repo.language}</span> : null}
                  <span className="flex items-center gap-1">
                    <FaStar className="text-amber-500" aria-hidden="true" />
                    {repo.stargazers_count}
                  </span>
                  <span>Updated {new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(repo.updated_at))}</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
            GitHub projects could not be loaded right now. The public profile is still available through the link above.
          </div>
        )}
      </div>
    </section>
  );
}
