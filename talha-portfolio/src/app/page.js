import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex items-center justify-center bg-[#E5E4E2] bg-opacity-10 rounded-xl w-[800px] h-96 mt-10"></div>
    </div>
  );
}

