import Image from 'next/image';
import { FaAndroid, FaApple, FaCode, FaCloud, FaCogs, FaMobileAlt } from 'react-icons/fa';
import { PageSection, type ContentCard } from '@/components/PageSection';

const identities = [
  'Senior Systems Engineer',
  'Enterprise Mobility Architect',
  'Automation Engineer',
  'Mobile Developer',
  'AI and LLM Enthusiast',
  'Full Stack Developer',
];

const aboutCards: ContentCard[] = [
  {
    title: 'Enterprise Scale',
    body: 'I design and support systems for enterprise environments exceeding 100,000 devices, where reliability, observability, lifecycle management, and repeatable automation matter as much as the first successful deploy.',
  },
  {
    title: 'Software to Hardware',
    body: 'My work does not stop at screens and APIs. I build automation systems, mobile tools, CAD models, hardware projects, and 3D printed parts that solve practical problems in the physical world.',
  },
  {
    title: 'Curiosity as Fuel',
    body: 'Many personal projects begin with a simple question, a rough sketch, or something my son Alexander and I can learn from together. Engineering is my profession, but building is also how I relax and explore.',
  },
];

const toolGroups = [
  { label: 'Mobility', icon: FaMobileAlt, items: ['Android', 'iOS', 'Workspace ONE', 'Intune', 'Knox', 'Jamf'] },
  { label: 'Automation', icon: FaCogs, items: ['APIs', 'Python', 'TypeScript', 'Kotlin', 'PowerShell', 'CI/CD'] },
  { label: 'Cloud and Systems', icon: FaCloud, items: ['Azure', 'AWS', 'Device Fleets', 'Telemetry', 'Security', 'Operations'] },
  { label: 'Development', icon: FaCode, items: ['Next.js', 'React', 'Mobile Apps', 'Backend Services', 'LLM Tooling', 'Data Pipelines'] },
];

const mobileStackLayers = [
  {
    label: 'Web and Full Stack',
    body: 'The portals, dashboards, APIs, data flows, and automation surfaces that support mobile operations.',
  },
  {
    label: 'Native Mobile',
    body: 'Android and iOS applications, platform behavior, device capabilities, diagnostics, and field workflows.',
  },
  {
    label: 'Device Management',
    body: 'MDM policy, enrollment, compliance, deployment, app lifecycle, fleet visibility, and enterprise support reality.',
  },
];

export default function About() {
  return (
    <PageSection
      eyebrow="About"
      title="Engineer, architect, builder, father."
      description="I build systems for large enterprise environments and practical tools for the real world. The common thread is simple: understand the problem deeply, make the workflow cleaner, and leave something useful behind."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <div className="space-y-5 text-base leading-8 text-slate-700">
          <p>
            I&apos;m Jonathon Poe, a senior systems engineer and enterprise mobility architect with a background that
            spans mobile development, automation, cloud platforms, full stack software, and AI-assisted tooling. I spend
            a lot of time where software meets operational reality: device fleets, APIs, managed platforms, diagnostics,
            deployment workflows, and the small details that decide whether a system is pleasant or painful to run.
          </p>
          <p>
            Professionally, I work at enterprise scale, designing solutions for environments with more than 100,000
            devices. That kind of scale has shaped how I think. Good engineering is not just code that works once. It is
            maintainable behavior, clear failure modes, automation where humans should not be doing repetitive work, and
            enough documentation that the next person can move faster.
          </p>
          <p>
            Away from formal work, I am still usually building something. Sometimes that is a mobile app, an automation
            workflow, an LLM experiment, a CAD model, or a 3D printed part. Sometimes it is a project sparked by
            curiosity with my son Alexander nearby, asking the kind of questions that make you look at familiar things
            differently. That is the best version of engineering to me: practical, curious, and connected to real life.
          </p>
        </div>

        <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Professional Identity</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {identities.map((identity) => (
              <span key={identity} className="rounded bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                {identity}
              </span>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-lg">
            <Image src="/images/alexander.webp" alt="Jonathon and Alexander" width={1920} height={1080} className="h-auto w-full object-cover" />
          </div>
        </aside>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {aboutCards.map((card) => (
          <article key={card.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{card.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-blue-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">The Full Mobile Stack</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">Yes, I know that sounds unusual.</h2>
        <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
          <p>
            One interview question I get often is some version of: how can one person genuinely specialize across web,
            native mobile, and mobile device management? It is a fair question. Most careers force those lanes apart.
            Mine kept pulling them together.
          </p>
          <p>
            I am comfortable calling myself a unicorn in that space because I have lived the full loop: building the
            software users touch, understanding the native platforms it runs on, and managing the enterprise fleets that
            deploy, secure, support, and measure it. That range lets me see problems from more than one seat at the
            table, which is often where the real solution shows up.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {mobileStackLayers.map((layer) => (
            <article key={layer.label} className="rounded-md bg-blue-50 p-5">
              <h3 className="text-lg font-bold text-slate-950">{layer.label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{layer.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">Where I Spend My Time</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {toolGroups.map(({ label, icon: Icon, items }) => (
            <div key={label} className="rounded-md bg-slate-50 p-5">
              <div className="flex items-center gap-3">
                <Icon className="text-2xl text-blue-700" aria-hidden="true" />
                <h3 className="text-lg font-bold text-slate-950">{label}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-5 text-3xl text-slate-700">
          <FaAndroid className="text-green-600" aria-label="Android" />
          <FaApple aria-label="Apple platforms" />
        </div>
      </div>
    </PageSection>
  );
}
