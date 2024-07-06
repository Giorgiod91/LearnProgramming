import Link from "next/link";
import { api } from "~/trpc/server";
import LandingPage from "./components/LandingPage";
import SecondPart from "./components/SecondPart";
import MiniGame from "./components/MiniGame";
import Banner1 from "./components/Banner1";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col scroll-smooth">
      <section className="h-screen items-center justify-center">
        <LandingPage />
      </section>
      <section>
        <Banner1 />
      </section>
      <section id="demo" className="h-screen  items-center justify-center">
        <SecondPart />
      </section>
      <section>
        <Banner1 />
      </section>
      <section className="h-screen items-center justify-center">
        <MiniGame />
      </section>
    </main>
  );
}
