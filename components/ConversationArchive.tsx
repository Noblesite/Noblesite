import { conversationExcerpts, type ConversationVoice } from '@/lib/starfleet-conversations';

const voiceLabels: Record<ConversationVoice, string> = {
  jonathon: "Jonathon's words",
  chatgpt: "ChatGPT's response",
  reflection: 'Later reflection',
};

const voiceStyles: Record<ConversationVoice, string> = {
  jonathon: 'border-blue-600 bg-blue-50',
  chatgpt: 'border-slate-400 bg-slate-50',
  reflection: 'border-amber-500 bg-amber-50',
};

export const ConversationArchive = () => (
  <section aria-labelledby="conversations-heading" className="border-t border-slate-200 pt-10">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Source material</p>
    <h2 id="conversations-heading" className="mt-2 text-3xl font-bold text-slate-950">
      How This Developed
    </h2>
    <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
      Parts of this philosophy became clearer through long conversations with ChatGPT. Selected excerpts may be
      published here later as source material—not as testimonials, and not as proof that an AI interpretation is an
      objective fact. The original conversations are not yet part of this repository, so no excerpts have been
      recreated or invented.
    </p>

    {conversationExcerpts.length > 0 ? (
      <div className="mt-8 space-y-6">
        {conversationExcerpts.map((excerpt) => (
          <article key={excerpt.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="text-xl font-bold text-slate-950">{excerpt.title}</h3>
            {excerpt.context ? <p className="mt-2 text-sm leading-6 text-slate-600">{excerpt.context}</p> : null}
            <div className="mt-5 space-y-4">
              {excerpt.entries.map((entry) => (
                <blockquote key={entry.id} className={`border-l-4 p-4 ${voiceStyles[entry.voice]}`}>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-600">{voiceLabels[entry.voice]}</p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-800">{entry.content}</p>
                </blockquote>
              ))}
            </div>
          </article>
        ))}
      </div>
    ) : (
      <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5">
        <p className="text-sm font-semibold text-slate-800">Conversation archive reserved</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Future entries will clearly label Jonathon&apos;s words, ChatGPT&apos;s responses, and later reflections or
          corrections.
        </p>
      </div>
    )}
  </section>
);
