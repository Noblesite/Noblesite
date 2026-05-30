import type { ReactNode } from 'react';

export type ContentCard = {
  title: string;
  body: string;
};

type PageSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export const PageSection = ({ eyebrow, title, description, children }: PageSectionProps) => (
  <section className="bg-gray-100 px-6 py-12">
    <div className="mx-auto max-w-6xl">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">{eyebrow}</p> : null}
      <h1 className="mt-2 text-4xl font-bold text-slate-950">{title}</h1>
      {description ? <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">{description}</p> : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </div>
  </section>
);

type CardGridProps = {
  cards: ContentCard[];
};

export const CardGrid = ({ cards }: CardGridProps) => (
  <div className="grid gap-5 md:grid-cols-2">
    {cards.map((card) => (
      <article key={card.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">{card.title}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">{card.body}</p>
      </article>
    ))}
  </div>
);
