import { playlistData } from "@/data/playlist-data";
import Image from "next/image";

const Ecouter = () => {
  return (
    <section id="ecouter" className="text-foreground flex flex-col gap-4 mb-30">
      <h1>Ecouter</h1>
      <div id="ecouter-container" className="flex flex-wrap">
        {playlistData.map((playlist, index) => {
          return (
            <div key={index} className="w-1/3">
              <Image
                src={playlist.src}
                alt={playlist.alt}
                width={350}
                height={350}
                className="rounded-md p-0.5 mb-20"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Ecouter;
