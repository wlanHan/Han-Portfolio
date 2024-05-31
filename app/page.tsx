import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-5">
      <div className="mx-w-7xl w-full">
        <FloatingNav navItems={[{ name: 'AnaSayfa', link: '/', icon: <FaHome /> }
        ]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
