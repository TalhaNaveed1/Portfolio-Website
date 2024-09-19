import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex flex-row justify-between space-x-32 mt-32">
      <div className="">
        <h2 className="text-white font-bold text-4xl">Talha Naveed</h2>
        <h3 className="text-white font-semibold mt-2">
          Second-year Computer Science Student at the University of Guelph
        </h3>
        <div className="flex flex-row gap-4">
          <a href="https://github.com/TalhaNaveed1/">
            <Image
              src="/github.png"
              alt="Github Logo"
              width={50}
              height={40}
              className="mt-11"
            />
          </a>
          <a href="https://www.linkedin.com/in/talha-naveed-b36290292/">
            <Image
              src="/linkedin.png"
              alt="Linkdin Logo"
              width={50}
              height={40}
              className="mt-11"
            />
          </a>
          <a href="mailto:naveedtalha11@gmail.com">
            <Image
              src="/mail.png"
              alt="Mail Logo"
              width={50}
              height={40}
              className="mt-14"
            />
          </a>
        </div>
      </div>
      <img src="/test.png" alt="Profile Picture" className="w-52 rounded-xl" />
    </div>
  );
}
