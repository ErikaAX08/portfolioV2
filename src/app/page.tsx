import { About, Header, MainVideo, Playground, Work } from "@/components/home";

export default function Home() {
  return (
    <article>
      <Header />
      <MainVideo />
      <Work />
      <About />
      <Playground />
    </article>
  );
}
