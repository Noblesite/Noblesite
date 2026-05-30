import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import MakerWorldIcon from '@/components/MakerWorldIcon';
import { profileLinks } from '@/lib/profile-links';

export default function Contact() {
  return (
    <section className="flex flex-col items-center bg-gray-100 py-10 px-6">
      <h2 className="text-4xl font-bold text-blue-600">Contact Me</h2>
      <p className="max-w-2xl text-center mt-4 text-gray-700">
        Have questions or want to connect? Feel free to reach out to me at:
      </p>
      {/* Email Link */}
      <a
        href="mailto:Noblesite@gmail.com"
        className="mt-4 flex items-center gap-2 text-blue-500 text-lg font-bold hover:underline"
      >
        <FaEnvelope className="text-xl" />
        Noblesite@gmail.com
      </a>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <a
          href={profileLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex min-w-40 flex-col items-center rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300"
        >
          <FaLinkedin className="text-blue-600 text-4xl" aria-hidden="true" />
          <span className="text-gray-700 mt-2 font-semibold">LinkedIn</span>
        </a>
        <a
          href={profileLinks.github}
          target="_blank"
          rel="noreferrer"
          className="flex min-w-40 flex-col items-center rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300"
        >
          <FaGithub className="text-gray-900 text-4xl" aria-hidden="true" />
          <span className="text-gray-700 mt-2 font-semibold">GitHub</span>
        </a>
        <a
          href={profileLinks.makerworld}
          target="_blank"
          rel="noreferrer"
          className="flex min-w-40 flex-col items-center rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-950">
            <MakerWorldIcon className="w-7" />
          </span>
          <span className="text-gray-700 mt-2 font-semibold">MakerWorld</span>
        </a>
      </div>
    </section>
  );
}
