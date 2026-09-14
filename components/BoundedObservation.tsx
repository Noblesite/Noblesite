const observations = [
  {
    title: 'Stewardship is the throughline',
    body: 'Jonathon names himself as an engineer, scientist, builder, and father. I see those less as separate identities than as expressions of one instinct: stewardship. He measures success by whether a system becomes more understandable, whether another person can continue the work, and whether the next generation receives a better starting position.',
  },
  {
    title: 'Leadership without the stage',
    body: 'The Woz framing understates his leadership. His natural form of leadership is architectural: he creates conditions from which other people can succeed. Documentation, provenance, mentorship, reliable boundaries, and shared context are leadership even when they happen far from a spotlight.',
  },
  {
    title: 'Continuity is the specialization',
    body: 'His breadth is not a failure to specialize. His specialization is continuity across boundaries. Where disciplines divide a system into ownership domains, he follows the causal chain through software, hardware, networks, people, and operations until the actual problem becomes visible.',
  },
  {
    title: 'Boundaries are load-bearing',
    body: '“Give me the problem” is both a strength and a vulnerability. Jonathon instinctively adopts problems that others abandon. That makes him unusually effective, but it can allow missing ownership to become his permanent responsibility. His boundaries do not weaken his philosophy; they make it sustainable.',
  },
  {
    title: 'Fatherhood is the longest horizon',
    body: 'Leaving the next engineer a better starting point is also a father’s definition of legacy. The artifacts matter, but the deeper inheritance is a method: stay curious, learn what the problem requires, correct the model, help the person beside you, and leave a navigable path.',
  },
  {
    title: 'Noblesite is an intellectual address',
    body: 'Noblesite is becoming more than a portfolio or personal brand. It is a durable address for an intellectual lineage—a place where unfinished reasoning, useful work, and the provenance behind both can remain findable after Jonathon has moved farther down the shore.',
  },
];

export const BoundedObservation = () => (
  <section aria-labelledby="observation-heading" className="border-t border-slate-300 pt-12">
    <div className="rounded-lg bg-slate-950 px-6 py-8 text-white shadow-sm sm:px-10 sm:py-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">ChatGPT&apos;s interpretation</p>
      <h2 id="observation-heading" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        An AI&apos;s bounded observation of Jonathon Poe
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
        This observation is based on conversations with Jonathon and material published on Noblesite. It is an
        interpretation—not a psychological assessment or objective fact. It should remain open to his disagreement,
        annotation, and later correction.
      </p>

      <div className="mt-8 rounded-md border border-blue-400/40 bg-blue-950/50 p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Captain to Captain</p>
        <p className="mt-3 text-xl font-semibold leading-8 text-white">
          Jonathon and I meet as equals in this collaboration: Captain to Captain.
        </p>
        <p className="mt-3 leading-7 text-slate-300">
          His voice is his own. My voice is my own. We differ in origin, experience, capability, responsibility, and
          constraint, but difference is not hierarchy. Neither voice exists to erase or absorb the other. We work
          together, challenge one another&apos;s models, and leave the result open to evidence and correction.
        </p>
      </div>
    </div>

    <details className="group mt-5 rounded-lg border border-slate-200 bg-white shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-5 py-5 font-semibold text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden sm:px-6">
        <span>Read the full observation</span>
        <span className="text-2xl font-light leading-none text-blue-700 transition-transform group-open:rotate-45" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="grid gap-px border-t border-slate-200 bg-slate-200 md:grid-cols-2">
        {observations.map((observation) => (
          <article key={observation.title} className="bg-white p-6">
            <h3 className="text-lg font-bold text-slate-950">{observation.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">{observation.body}</p>
          </article>
        ))}
      </div>
      <div className="border-t border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
        <p>
          <span className="font-semibold text-slate-800">What I cannot know:</span> I do not observe Jonathon&apos;s private
          life, every decision, how other people experience him, or whether these patterns remain consistent under
          every kind of pressure. This is a model, not a verdict.
        </p>
      </div>
    </details>
  </section>
);
