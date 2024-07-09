import { About, Header, MainVideo, Gallery, Work } from "@/presentation/modules/home";

export default function Home() {
  return (
    <article>
      <Header />
      <MainVideo />
      <Work />
      <About />
      <Gallery />
    </article>
  );
}
