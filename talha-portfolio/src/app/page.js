import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Education from "./components/Education";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center rounded-xl w-[800px] mt-10">
        <Intro />
        <About />
        <Education />
        
      </div>
    </div>
  );
}

