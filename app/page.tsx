import Menu from "./Layout/Menu";

export default function Home() {
  return (
    <section className="h-screen bg-[url(/background.png)] bg-center bg-cover relative text-white">
      <div
        id="bg-overlay"
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 from-5% via-transparent via-70% to-black/90 to-99%"
      >
        <Menu />
      </div>
    </section>
  );
}
