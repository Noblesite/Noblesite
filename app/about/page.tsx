import { FaReact, FaAndroid, FaWindows, FaApple } from 'react-icons/fa';
import { SiNextdotjs} from 'react-icons/si';
import Image from 'next/image';

export default function About() {
  return (
    <section className="flex flex-col items-center bg-gray-100 py-10 px-6">
    <h2 className="text-4xl font-bold text-blue-600">About Me</h2>
    <div className="max-w-3xl text-center mt-6">
      <p className="text-lg text-gray-700">
        Hi, I&apos;m <span className="font-bold">Jonathon D. Poe</span>, a seasoned{" "}
        <span className="font-bold">Software & Enterprise Mobile Management Engineer</span> with over 15 years of experience in{" "}
        <span className="font-bold">enterprise mobility</span>, <span className="font-bold">automation</span>, and{" "}
        <span className="font-bold">front-end design</span>. I craft intuitive, responsive user interfaces using{" "}
        <span className="font-bold">React</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">Tailwind CSS</span>, and{" "}
        <span className="font-bold">TypeScript</span>, enabling fast and scalable applications that prioritize user experience.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Recently, I’ve focused on <span className="font-bold">transforming automation workflows by integrating agentic AI</span>, paving the way for smarter, more agile enterprise solutions. This focus has enabled me to streamline workflows, increase productivity, and improve decision-making in dynamic environments.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Throughout my career, I’ve worked with <span className="font-bold">multiple Fortune 500 companies</span>, delivering impactful solutions for large-scale mobile deployments, automation platforms, and enterprise applications. My technical expertise spans{" "}
        <span className="font-bold">C++</span>, <span className="font-bold">C#.NET</span>, <span className="font-bold">Java</span>,{" "}
        <span className="font-bold">Python</span>, <span className="font-bold">Objective-C</span>, <span className="font-bold">Swift</span>, and{" "}
        <span className="font-bold">Kotlin</span>, alongside cloud platforms like{" "}
        <span className="font-bold">Azure</span> and <span className="font-bold">AWS</span>.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Beyond my professional endeavors, I’m a <span className="font-bold">dedicated father</span> and <span className="font-bold">lifelong learner</span>, always striving to stay ahead of industry trends. Whether it’s fine-tuning mobile workflows, optimizing RFID solutions, or crafting intuitive applications, I take pride in merging creativity with innovation to solve real-world problems.
      </p>
    </div>
  
  {/* Technology Icons */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
      {/* Existing Icons */}
      <div className="flex flex-col items-center">
        <FaReact className="text-blue-500 text-5xl" />
        <span className="mt-2 text-gray-700">React</span>
      </div>
      <div className="flex flex-col items-center">
        <SiNextdotjs className="text-black text-5xl" />
        <span className="mt-2 text-gray-700">Next.js</span>
      </div>
      {/* New Icons */}
      <div className="flex flex-col items-center">
        <Image src="/icons/zebra.png" alt="Zebra" width={40}
            height={40} />
        <span className="mt-2 text-gray-700">Zebra</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/icons/samsung.svg" alt="Samsung" width={40}
            height={40} />
        <span className="mt-2 text-gray-700">Samsung</span>
      </div>
      <div className="flex flex-col items-center">
        <FaAndroid className="text-green-500 text-5xl" />
        <span className="mt-2 text-gray-700">Android</span>
      </div>
      <div className="flex flex-col items-center">
        <FaApple className="text-gray-800 text-5xl" />
        <span className="mt-2 text-gray-700">iOS</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/icons/xcode.svg" alt="Xcode" width={40}
            height={40} />
        <span className="mt-2 text-gray-700">Xcode</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/icons/androidstudio.png" alt="Android Studio" width={40}
            height={40} />
        <span className="mt-2 text-gray-700">Android Studio</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/icons/vscode.svg" alt="Visual Studio Code" width={40}
            height={40} />
        <span className="mt-2 text-gray-700">Visual Studio Code</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/icons/visualstudio.png" alt="Visual Studio" width={40}
            height={40} />
        <span className="mt-2 text-gray-700">Visual Studio</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/icons/airwatch.png" alt="AirWatch" width={40}
            height={40} />
        <span className="mt-2 text-gray-700">AirWatch</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/icons/intune.png" alt="Intune" width={40}
            height={40} />
        <span className="mt-2 text-gray-700">Intune</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/icons/jamf.png" alt="Jamf" width={40}
            height={40} />
        <span className="mt-2 text-gray-700">Jamf</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/icons/ollama.png" alt="Ollama" width={40}
            height={40} />
        <span className="mt-2 text-gray-700">Ollama</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/icons/aws.png" alt="AWS" width={40}
            height={40} />
        <span className="mt-2 text-gray-700">AWS</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src="/icons/azure.png" alt="Azure" width={40}
            height={40} />
        <span className="mt-2 text-gray-700">Azure</span>
      </div>
      <div className="flex flex-col items-center">
        <FaWindows className="text-blue-600 text-5xl" />
        <span className="mt-2 text-gray-700">Windows</span>
      </div>
      <div className="flex flex-col items-center">
        <FaApple className="text-gray-800 text-5xl" />
        <span className="mt-2 text-gray-700">macOS</span>
      </div>
    </div>
  </section>  
  );
}
