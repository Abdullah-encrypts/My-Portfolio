import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import {FloatingNav} from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-clip items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={
          navItems
        }/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experiences />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
