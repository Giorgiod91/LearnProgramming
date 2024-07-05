import Link from "next/link";
import { api } from "~/trpc/server";
import LandingPage from "./components/LandingPage";
import SecondPart from "./components/SecondPart";
import MiniGame from "./components/MiniGame";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col scroll-smooth">
      <section className="h-screen items-center justify-center">
        <LandingPage />
      </section>
      <section className="h-screen items-center justify-center">
        <SecondPart />
      </section>
      <section className="h-screen items-center justify-center">
        <MiniGame />
      </section>
    </main>
  );
}
