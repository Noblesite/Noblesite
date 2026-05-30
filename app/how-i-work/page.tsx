import { CardGrid, PageSection, type ContentCard } from '@/components/PageSection';

const principles: ContentCard[] = [
  {
    title: 'Systems Thinking',
    body: 'I try to understand the whole operating environment before prescribing a fix: people, tooling, edge cases, failure modes, support paths, and the incentives that shape behavior.',
  },
  {
    title: 'Automation First',
    body: 'If a process is repeated, fragile, or easy to forget, I look for a way to automate it. The goal is not automation for its own sake; it is reducing toil so people can focus on judgment.',
  },
  {
    title: 'Continuous Improvement',
    body: 'I prefer steady, observable improvements over dramatic rewrites. Small upgrades compound when they make the system easier to test, easier to explain, and easier to operate.',
  },
  {
    title: 'Data-Driven Decision Making',
    body: 'I like strong opinions, but I trust evidence more. Logs, telemetry, support patterns, user feedback, and operational metrics all help separate a hunch from a durable decision.',
  },
  {
    title: 'Builder Mentality',
    body: 'I learn best by making things. Prototypes, scripts, dashboards, mobile tools, CAD models, and 3D prints all help me move from abstract discussion to something people can evaluate.',
  },
  {
    title: 'Leadership and Mentorship',
    body: 'My leadership style is practical and calm: clarify the goal, reduce ambiguity, share context, and help people build confidence by giving them useful ownership.',
  },
  {
    title: 'Communication Style',
    body: 'I value direct, plain-language communication. Complex systems are hard enough already; the explanation should make the next step easier, not prove how complicated the topic is.',
  },
  {
    title: 'Areas of Ongoing Growth',
    body: 'I am always working on sharper prioritization, better storytelling around technical decisions, and staying current with AI, mobile platform changes, cloud patterns, and maker tooling.',
  },
];

const workingNotes = [
  'I like building a small working version early so the team can react to reality instead of theory.',
  'I document decisions when they affect future maintainers, operators, or support teams.',
  'I am comfortable moving between strategy and implementation; architecture matters more when it survives contact with the code.',
  'Personality frameworks can be useful shorthand, but I would rather be understood by my habits: curiosity, ownership, clarity, and follow-through.',
];

export default function HowIWork() {
  return (
    <PageSection
      eyebrow="How I Work"
      title="Practical systems, clear thinking, steady improvement."
      description="My working style is shaped by enterprise scale, hands-on building, and the belief that good engineering should make life easier for the people who use, support, and inherit the system."
    >
      <CardGrid cards={principles} />

      <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">What This Looks Like Day to Day</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {workingNotes.map((note) => (
            <p key={note} className="rounded-md bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
              {note}
            </p>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
