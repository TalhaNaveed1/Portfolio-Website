import Image from "next/image";

export default function Education() {
  return (
    <div className="flex mt-32">
      <Image
        src="/uofg.png"
        alt="Guelph Logo"
        width={130}
        height={40}
        className="mt-11"
      ></Image>
      <div className="flex flex-col">
        <h2 className="text-white font-bold text-3xl mb-40 mr-28 text-center">
          Education
        </h2>
        <h3 className="text-white font-bold text-2xl  ml-10">
          Computer Science (BCOMP) at the University of Guelph
        </h3>
        <p className="text-white font-semibold ml-11">
          Relevant Coursework: Data Structures, Discrete I, Discrete II, Intro
          to Programming
        </p>
      </div>
    </div>
  );
}
