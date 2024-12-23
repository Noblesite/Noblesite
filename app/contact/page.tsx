import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

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
      {/* Social Links */}
      <div className="flex mt-8 gap-6">
        {/* LinkedIn Placeholder */}
        <div className="flex flex-col items-center">
          <FaLinkedin className="text-blue-600 text-4xl" />
          <span className="text-gray-600 mt-2">LinkedIn</span>
        </div>
        {/* GitHub Placeholder */}
        <div className="flex flex-col items-center">
          <FaGithub className="text-gray-800 text-4xl" />
          <span className="text-gray-600 mt-2">GitHub</span>
        </div>
      </div>
    </section>
  );
}
