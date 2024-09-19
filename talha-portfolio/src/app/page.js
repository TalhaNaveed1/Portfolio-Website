import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center rounded-xl w-[800px] h-96 mt-10">
        <Intro />
        <About />
      </div>
    </div>
  );
}

