import { FaGithub, FaLinkedin } from 'react-icons/fa';
import MakerWorldIcon from '@/components/MakerWorldIcon';
import { profileLinks } from '@/lib/profile-links';

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-5 text-white">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row">
      <span>&copy; {new Date().getFullYear()} Noble&apos;s Portfolio. All Rights Reserved.</span>
      <div className="flex items-center gap-4 text-xl">
        <a href={profileLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="hover:text-slate-200">
          <FaGithub aria-hidden="true" />
        </a>
        <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="hover:text-slate-200">
          <FaLinkedin aria-hidden="true" />
        </a>
        <a href={profileLinks.makerworld} target="_blank" rel="noreferrer" aria-label="MakerWorld profile" className="hover:opacity-80">
          <MakerWorldIcon className="w-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
