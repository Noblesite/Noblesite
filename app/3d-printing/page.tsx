import { FaExternalLinkAlt } from 'react-icons/fa';
import MakerWorldIcon from '@/components/MakerWorldIcon';
import { profileLinks } from '@/lib/profile-links';

const printFocus = [
  'Functional prints and utility pieces',
  'Prototype parts for desk, shop, and lab workflows',
  'Maker experiments tied back to software, automation, and hardware tinkering',
];

export default function PrintingPage() {
  return (
    <section className="bg-zinc-50 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
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
            <div className="flex h-20 w-20 items-center justify-center rounded-md bg-zinc-950">
              <MakerWorldIcon className="w-12" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-950">Noblesite on MakerWorld</h3>
              <p className="text-sm text-zinc-600">Models, collections, and print-focused experiments.</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {printFocus.map((item) => (
              <li key={item} className="rounded-md bg-zinc-100 px-4 py-3 text-sm font-medium text-zinc-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
