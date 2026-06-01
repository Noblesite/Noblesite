import Image from 'next/image';
import Link from 'next/link';
import type { ComponentType } from 'react';
import { FaArrowRight, FaBrain, FaCogs, FaMobileAlt, FaPrint } from 'react-icons/fa';

type Pillar = {
  title: string;
  body: string;
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
};

type ImpactMetric = {
  value: string;
  label: string;
};

type NextStep = {
  title: string;
  body: string;
  href: string;
};

const pillars: Pillar[] = [
  {
    title: 'Enterprise Engineering',
    body: 'Designing and supporting enterprise mobility and endpoint solutions at national scale.',
    icon: FaMobileAlt,
  },
  {
    title: 'Software & Automation',
    body: 'Building mobile apps, APIs, automation platforms, and internal tools that reduce repetitive work and improve reliability.',
    icon: FaCogs,
  },
  {
    title: 'AI & Innovation',
    body: 'Exploring LLM infrastructure, AI-assisted workflows, model training, and next-generation automation.',
    icon: FaBrain,
  },
  {
    title: 'Noblesite Labs',
    body: 'Designing functional prints, STEM projects, educational models, and practical creations that turn ideas into physical reality.',
    icon: FaPrint,
  },
];

const impactMetrics: ImpactMetric[] = [
  { value: '100,000+', label: 'managed devices supported' },
  { value: 'Enterprise', label: 'mobility architecture' },
  { value: 'Mobile + API', label: 'development and automation' },
  { value: 'AI / LLM', label: 'experimentation and workflow design' },
  { value: 'Noblesite Labs', label: '3D printing and maker projects' },
];

const nextSteps: NextStep[] = [
  { title: 'About', body: 'The story behind the engineer, builder, and father.', href: '/about' },
  { title: 'How I Work', body: 'My approach to systems, leadership, automation, and growth.', href: '/how-i-work' },
  { title: 'Projects', body: 'Live work from my public GitHub profile.', href: '/projects' },
  { title: '3D Printing', body: 'Noblesite Labs, MakerWorld, and practical physical builds.', href: '/3d-printing' },
  { title: 'Contact', body: 'Email, LinkedIn, GitHub, and MakerWorld links.', href: '/contact' },
];

export default function Home() {
  return (
    <main className="bg-gray-100 text-slate-800">
      <section className="px-6 py-12 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Noblesite</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Engineer. Architect. Builder. Father.
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-700">
              I design enterprise-scale mobility solutions, automation platforms, AI systems, and physical products
              while raising the next generation of builders.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              At work, I build systems that support over 100,000 managed devices. At home, I build projects, lessons,
              and memories with my son Alexander. Both are rooted in the same belief: technology should solve real
              problems and make life better.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                View Projects
                <FaArrowRight className="text-xs" aria-hidden="true" />
              </Link>
              <Link
                href="/how-i-work"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
              >
                How I Work
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
              <Image
                src="/images/alexander.webp"
                alt="Jonathon and Alexander"
                width={1600}
                height={1200}
                priority
                className="aspect-[4/3] w-full object-cover object-center sm:aspect-[5/4] lg:aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">What I Build</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">One story, four connected disciplines.</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map(({ title, body, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <Icon className="text-3xl text-blue-700" aria-hidden={true} />
                <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Scale & Impact</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950">Built for real operating environments.</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                The work ranges from enterprise device fleets to personal lab experiments, but the standard is the
                same: practical systems that people can trust, use, and improve.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {impactMetrics.map((metric) => (
                <div key={`${metric.value}-${metric.label}`} className="rounded-md bg-slate-50 px-4 py-4">
                  <p className="text-2xl font-bold text-slate-950">{metric.value}</p>
                  <p className="mt-1 text-sm font-medium text-slate-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-lg border border-blue-200 bg-white p-6 shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Why I Build</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Fatherhood sharpened the mission.</h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-slate-700">
            <p>
              Technology has always been more than a career for me. It is how I learn, solve problems, and create
              opportunities. Becoming a full-time father has made that purpose even clearer.
            </p>
            <p>
              Alexander comes first. That priority shapes how I work: I value reliability, focus, clear communication,
              and building systems that make life easier for the people depending on them.
            </p>
            <p>
              Many of my personal projects now start with a simple question: what can we build, learn, or improve
              together?
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Next Steps</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Explore the rest of the work.</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {nextSteps.map((step) => (
              <Link
                key={step.href}
                href={step.href}
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-700">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
