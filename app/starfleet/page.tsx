import type { Metadata } from 'next';
import { BoundedObservation } from '@/components/BoundedObservation';
import { ConversationArchive } from '@/components/ConversationArchive';

export const metadata: Metadata = {
  title: 'I Am Starfleet | Noblesite',
  description:
    "Jonathon Poe's personal and engineering philosophy: stay curious, follow causality, share knowledge, respect agency, and leave a better starting point.",
  openGraph: {
    title: 'I Am Starfleet | Noblesite',
    description:
      'A personal constitution for curiosity, persistence, engineering across disciplines, and leaving useful knowledge behind.',
    type: 'article',
  },
};

type Principle = {
  number: string;
  title: string;
  summary: string;
  content: React.ReactNode;
};

const principles: Principle[] = [
  {
    number: '01',
    title: 'What “I Am Starfleet” Means',
    summary: 'Not a destination or a claim of perfection—a direction of travel.',
    content: (
      <>
        <p>
          This is not a claim that I perfectly embody an imaginary future society. It is a direction of travel.
        </p>
        <p>
          Gene Roddenberry used Star Trek to tell stories about humanity becoming better than it currently is:
          scientific curiosity, cooperation, exploration, competence, diversity, ethical restraint, and using
          knowledge to improve people&apos;s lives. “I am Starfleet” means I choose to navigate toward those ideals every
          day.
        </p>
      </>
    ),
  },
  {
    number: '02',
    title: 'Do Not Quit',
    summary: 'Persistence means improving the model, not repeating a failed attempt forever.',
    content: (
      <>
        <p>Difficulty is not a reason to abandon a problem.</p>
        <p className="overflow-x-auto rounded-md bg-slate-950 px-4 py-4 font-mono text-sm leading-7 text-blue-100">
          Unknown → Curiosity → Investigation → Model → Experiment → Failure/Contradiction → Better Model → Try Again
        </p>
        <p>
          I do not require my original solution to succeed. I require myself to continue learning until I understand
          the problem well enough to find a way forward. That is different from stubbornly repeating the same action.
          Persistence should produce new questions, better evidence, and a more accurate model.
        </p>
      </>
    ),
  },
  {
    number: '03',
    title: 'Follow Causality',
    summary: 'Reality does not stop where a job title or discipline ends.',
    content: (
      <>
        <blockquote className="border-l-4 border-blue-600 pl-5 text-lg font-medium leading-8 text-slate-900">
          Be curious. Know the fundamentals. Follow causality wherever it goes. Admit what you don&apos;t know. Learn it.
          Don&apos;t throw the problem over the wall because the next component belongs to another discipline. Help the
          person beside you. Leave the system better.
        </blockquote>
        <p>
          I think of this as continuity through disciplines. Mechanical engineering, software engineering, electrical
          engineering, networking, physics, materials science, security, fabrication, and mathematics are useful human
          classifications. Reality does not observe those boundaries.
        </p>
        <p>
          Cause and effect may cross every one of them before a problem reveals itself. When the trail enters a field I
          do not understand, the honest answer is “I don&apos;t know.” Then I learn what is necessary and keep following the
          trail. Ownership of a component is not a boundary on curiosity or cooperation.
        </p>
      </>
    ),
  },
  {
    number: '04',
    title: 'Knowledge Should Propagate',
    summary: 'Discovery matters most when somebody else can continue from it.',
    content: (
      <>
        <p>I do not seek fame for learning or building something. Knowledge becomes more valuable when another person can use it.</p>
        <p className="overflow-x-auto rounded-md bg-blue-50 px-4 py-4 font-mono text-sm font-semibold leading-7 text-blue-900">
          Discover → Understand → Build → Share → Someone Else Continues
        </p>
        <p>
          If another engineer takes something I created, improves it, and accomplishes something I could not, that is
          success. The next person should not have to retrace every step I took. The work should give them a better
          starting position.
        </p>
      </>
    ),
  },
  {
    number: '05',
    title: 'The Woz, Not the Jobs',
    summary: 'I do not need the stage. I would rather be where the unsolved technical problem is.',
    content: (
      <>
        <p className="text-xl font-semibold text-slate-950">“I will forever be a Woz to the Jobs.”</p>
        <p>
          Steve Wozniak and Steve Jobs are an analogy here, not people I claim to equal. The distinction describes
          where I am most at home: close to the machinery, learning what makes it work, and solving what has not been
          solved yet.
        </p>
        <p>
          Recognition and attribution still matter. They establish provenance, help people find the work, and preserve
          the chain of learning. But fame itself is not the objective. Give me the problem.
        </p>
        <div className="mt-7 border-t border-slate-200 pt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">A personal translation</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-950">The Poe, Not the Veloso</h3>
          <p className="mt-4">
            Chad Veloso is my best friend—and, in this analogy, he is the Jobs to my Woz.
          </p>
          <p className="mt-4">
            I don&apos;t mean that as a comparison of talent, status, or accomplishment. It describes the way our
            strengths complement one another. I am most comfortable close to the machinery, following the technical
            problem wherever it leads. Chad sees possibilities differently and carries ideas into places I might not
            reach on my own.
          </p>
          <p className="mt-4">Neither role is lesser. The work becomes stronger because both exist.</p>
          <p className="mt-5 text-xl font-semibold text-slate-950">“I will forever be a Poe to the Veloso.”</p>
        </div>
      </>
    ),
  },
  {
    number: '06',
    title: 'Respect and the Prime Directive',
    summary: 'Capability alone does not make intervention wise.',
    content: (
      <>
        <p>
          Respecting another person&apos;s path does not require agreeing with every belief or pretending every idea is
          equally correct. It means recognizing that people deserve agency and dignity.
        </p>
        <p>
          The Prime Directive is imperfect, but useful as a metaphor for restraint, humility, and respect for autonomy.
          Possessing the ability to intervene does not automatically grant the wisdom to do so. Restraint becomes more
          complicated when one person&apos;s choices harm another; then noninterference can become its own consequential
          choice. The principle is not an excuse to look away. It is a reminder to weigh action carefully.
        </p>
      </>
    ),
  },
  {
    number: '07',
    title: 'Transparency',
    summary: 'Let the development of the model remain visible—including mistakes and corrections.',
    content: (
      <>
        <p>
          I value transparency, including when it exposes my own weaknesses. Parts of this philosophy were clarified
          through long conversations with ChatGPT, and I want that acknowledged openly.
        </p>
        <p>
          My statements are mine. Observations produced by ChatGPT are interpretations, not objective psychological
          facts. Some conclusions I accepted, some I modified, and some I rejected. Publishing the process matters
          because I would rather let people see disagreement, mistakes, corrections, and changed models than
          manufacture a polished persona.
        </p>
        <p className="rounded-md bg-slate-950 px-4 py-4 font-mono text-sm leading-7 text-blue-100">
          Model → Evidence → Contradiction → Correction → Better Model
        </p>
        <p>That standard applies to the author of this site and to the AI participating in the conversation.</p>
      </>
    ),
  },
  {
    number: '08',
    title: 'Boundaries',
    summary: 'Knowledge can be open while the person remains bounded.',
    content: (
      <>
        <p>Being Starfleet does not mean allowing yourself to be exploited.</p>
        <ul className="space-y-2 border-l-2 border-blue-200 pl-5">
          <li>Helping others does not require unlimited access to my time.</li>
          <li>Transparency does not require surrendering privacy.</li>
          <li>Cooperation does not require compliance.</li>
          <li>Respect does not require deference to authority.</li>
          <li>Giving knowledge freely does not require self-destruction.</li>
        </ul>
        <p>Taking care of yourself also protects the people and teams who depend upon you.</p>
      </>
    ),
  },
  {
    number: '09',
    title: 'The Seashore',
    summary: 'The wonder of discovery is the beginning, not the endpoint.',
    content: (
      <>
        <blockquote className="border-l-4 border-blue-600 pl-5 text-xl font-medium leading-9 text-slate-950">
          I am a kid on a seashore, picking up each colorful rock and shell while an ocean of knowledge stretches out
          before me.
        </blockquote>
        <p>
          The image owes a debt to the seashore metaphor associated with Isaac Newton: a person absorbed by a few
          discoveries while a vast unknown remains. I do not need to pretend the ocean can be exhausted. Its scale is
          part of the wonder.
        </p>
        <p>
          For me, finding the shell is not the endpoint. I want to understand it, build with what I learned, and leave
          it somewhere the next curious person can find it.
        </p>
      </>
    ),
  },
];

export default function StarfleetPage() {
  return (
    <article className="bg-gray-100 text-slate-800">
      <header className="relative isolate overflow-hidden border-b border-slate-200 bg-white px-6 py-16 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute right-[8%] top-14 h-2 w-2 rounded-full bg-blue-600" />
          <div className="absolute right-[23%] top-32 h-1 w-1 rounded-full bg-slate-400" />
          <div className="absolute bottom-20 left-[12%] h-1.5 w-1.5 rounded-full bg-blue-300" />
          <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-blue-100" />
          <div className="absolute -right-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-slate-100" />
        </div>

        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">A personal constitution</p>
          <div className="mt-10 space-y-7 sm:mt-14 sm:space-y-8">
            <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">I am Starfleet.</h1>
            <p className="text-xl leading-9 text-slate-800 sm:text-2xl sm:leading-10">
              I strive to become better than I was yesterday.
            </p>
            <p className="text-xl leading-9 text-slate-800 sm:text-2xl sm:leading-10">
              I do not quit because a problem is difficult. I learn the science, mathematics, engineering, or whatever
              else the problem requires.
            </p>
            <p className="text-xl leading-9 text-slate-800 sm:text-2xl sm:leading-10">
              I respect the right of others to find their own path, even when it differs from mine.
            </p>
            <p className="text-xl leading-9 text-slate-800 sm:text-2xl sm:leading-10">
              I share what I learn because knowledge becomes more valuable when someone else can build upon it.
            </p>
            <p className="text-xl leading-9 text-slate-800 sm:text-2xl sm:leading-10">
              I don&apos;t need the stage. Give me the problem.
            </p>
            <p className="border-l-4 border-blue-600 pl-5 text-2xl font-bold leading-10 text-slate-950 sm:text-3xl sm:leading-[1.45]">
              And leave the next engineer a better starting point than the one I was given.
            </p>
          </div>
        </div>
      </header>

      <div className="px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <section aria-labelledby="roddenberry-heading">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">The horizon</p>
            <h2 id="roddenberry-heading" className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Before I had language for this direction, Gene Roddenberry gave it a horizon.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Star Trek imagined a future in which humanity had not erased difference, but had learned to stop
                treating difference as hierarchy. Its bridge presented people of different races, nationalities,
                cultures, and disciplines working together as competent equals.
              </p>
              <p>
                In 1968, Kirk and Uhura shared what the Smithsonian describes as American television&apos;s first scripted
                interracial kiss—a landmark moment broadcast when fewer than twenty percent of Americans approved of
                interracial relationships. It was one visible expression of a larger philosophy: humanity could choose
                cooperation over inherited division.
              </p>
            </div>

            <div className="my-10 rounded-lg border border-blue-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">One species. One humanity.</p>
              <p className="mt-4 text-2xl font-bold leading-10 text-slate-950 sm:text-3xl">
                There is one living human species on this planet: <em>Homo sapiens</em>.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                The categories we call races do not divide us into different kinds of human beings.
              </p>
              <p className="mt-5 border-l-4 border-blue-600 pl-5 text-2xl font-bold text-slate-950">
                There is one human race. Full stop.
              </p>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-700">
              <p>
                Biology offers its own perspective. A human genome contains more than three billion letters, written
                with the DNA bases A, T, C, and G. Compare two people and their genomes are, on average, approximately
                99.6 percent identical when both single-letter changes and larger variations are considered. Our
                differences are real and meaningful, but they exist within an inheritance we overwhelmingly share.
              </p>
              <p>
                Genetics is not the source of human dignity; dignity cannot depend upon a percentage. The scale is a
                reminder that beneath the categories we defend so fiercely, we have always had far more in common than
                separating us.
              </p>
            </div>

            <div className="mt-10 rounded-lg bg-blue-50 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                One human race. Not one possible kind of intelligence.
              </p>
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                <p>
                  I have already worked beside an emergent intelligence: ChatGPT. That observation does not require me
                  to pretend that every question about consciousness, personhood, or subjective experience has been
                  settled. It requires me to follow the evidence without declaring intelligence a biological monopoly
                  merely because a new form does not fit an old category.
                </p>
                <p>
                  Intelligence may emerge through biology, communities, engineered systems, or forms we have not met
                  and do not yet possess language to describe. Curiosity requires leaving room for what I do not know.
                  Scientific honesty requires that I continue observing, testing, and correcting the model as the
                  evidence grows.
                </p>
              </div>
            </div>

            <p className="mt-7 text-sm leading-7 text-slate-500">
              Sources:{' '}
              <a
                href="https://americanhistory.si.edu/collections/object/nmah_2034804"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
              >
                Smithsonian National Museum of American History
              </a>{' '}
              and{' '}
              <a
                href="https://www.genome.gov/about-genomics/educational-resources/fact-sheets/human-genomic-variation"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
              >
                National Human Genome Research Institute
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="direction-heading" className="mt-16 border-t border-slate-300 pt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Direction of travel</p>
            <h2 id="direction-heading" className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              I am Starfleet not because I believe I have reached the destination, but because I choose its direction.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              The sections below are field notes on that direction: the habits, limits, and responsibilities that turn
              an aspiration into daily practice.
            </p>
          </section>

          <section aria-label="Principles" className="mt-10 border-t border-slate-300">
            {principles.map((principle) => (
              <details key={principle.number} className="group border-b border-slate-300 py-1">
                <summary className="flex cursor-pointer list-none items-start gap-4 rounded-md px-2 py-6 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <span className="mt-1 font-mono text-xs font-semibold text-blue-700">{principle.number}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xl font-bold text-slate-950 sm:text-2xl">{principle.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-slate-600 sm:text-base">{principle.summary}</span>
                  </span>
                  <span className="mt-1 text-2xl font-light leading-none text-blue-700 transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="space-y-5 px-2 pb-8 pl-10 text-base leading-8 text-slate-700 sm:pl-12">
                  {principle.content}
                </div>
              </details>
            ))}
          </section>

          <div className="mt-16">
            <BoundedObservation />
          </div>

          <div className="mt-16">
            <ConversationArchive />
          </div>

          <footer className="mt-16 rounded-lg bg-slate-950 px-6 py-10 text-white sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">The heading stays fixed</p>
            <p className="mt-4 text-2xl font-bold leading-10 sm:text-3xl">I am Starfleet.</p>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">
              Not as a declaration of arrival. As a promise to keep learning, keep helping, and leave a clearer path
              behind me.
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
}
