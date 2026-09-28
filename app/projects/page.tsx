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

const githubReposPerPage = 100;

async function getRepos(): Promise<GitHubRepo[]> {
  try {
    const repos: GitHubRepo[] = [];
    let page = 1;

    while (true) {
      const response = await fetch(
        `https://api.github.com/users/Noblesite/repos?type=owner&sort=updated&direction=desc&per_page=${githubReposPerPage}&page=${page}`,
        {
          headers: {
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          },
          next: {
            revalidate: 3600,
          },
        },
      );

      if (!response.ok) {
        return [];
      }

      const pageRepos = (await response.json()) as GitHubRepo[];

      if (!Array.isArray(pageRepos)) {
        return [];
      }

      repos.push(...pageRepos);

      if (pageRepos.length < githubReposPerPage) {
        break;
      }

      page += 1;
    }

    return repos
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

        <aside
          aria-labelledby="project-scope-heading"
          className="rounded-lg border border-blue-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">A note on scope</p>
          <h3 id="project-scope-heading" className="mt-2 text-2xl font-bold text-slate-950">
            Public GitHub is only part of the work.
          </h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md bg-blue-50 p-4">
              <p className="text-3xl font-bold text-slate-950">{repos.length || '—'}</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">
                public GitHub {repos.length === 1 ? 'repository' : 'repositories'}
              </p>
            </div>
            <div className="rounded-md bg-slate-100 p-4">
              <p className="text-3xl font-bold text-slate-950">50+</p>
              <p className="mt-1 text-sm font-semibold text-slate-600">
                projects across my professional and personal engineering history
              </p>
            </div>
          </div>
          <div className="mt-5 max-w-4xl space-y-3 text-sm leading-7 text-slate-600">
            <p className="font-semibold text-slate-800">
              This is what I can currently show you—not what I am professionally working on.
            </p>
            <p>
              The repositories below are the complete set I can presently share through public GitHub. They are not a
              professional roadmap, a status feed, or a complete record of my engineering work. Much of that work must
              remain private because it involves employer or client confidentiality, proprietary enterprise systems,
              protected environments, active research, or material that is not available for public release.
            </p>
          </div>
        </aside>

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
                  {repo.fork ? <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">Fork</span> : null}
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
