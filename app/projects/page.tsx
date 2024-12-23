import Image from 'next/image';

export default function Projects() {
  return (
    <section className="flex flex-col items-center bg-gray-100 py-10 px-6">
      <h2 className="text-4xl font-bold text-blue-600">Projects</h2>
      <p className="max-w-2xl text-center mt-6 text-gray-700">
        🚧 This page is currently under construction. 🚧
      </p>
      <p className="max-w-2xl text-center mt-4 text-gray-700">
        I&apos;m in the process of moving my personal GitLab repository to GitHub.
      </p>
      <p className="max-w-2xl text-center mt-4 text-gray-700">
        Updates will be added as soon as the transition is complete.
      </p>
      <div className="mt-8">
        <Image
          src="/images/under-construction.webp"
          alt="Under Construction"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
}
