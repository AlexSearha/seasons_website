import { playlistData } from "@/data/playlist-data";
import Image from "next/image";
import Button from "../Components/Button";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Ecouter = () => {
  return (
    <section
      id="ecouter"
      className="text-foreground font-mono flex flex-col gap-4 mb-30"
    >
      <h1>Ecouter</h1>
      <div id="ecouter-container" className="flex flex-wrap mt-8">
        {playlistData.map((playlist, index) => {
          return (
            <div key={index} className="w-1/3 flex flex-col mb-8">
              <div className="h-[250px] px-8">
                <Image
                  src={playlist.src}
                  alt={playlist.alt}
                  width={350}
                  height={350}
                  className="rounded-lg mb-20 object-cover shadow-lg shadow-black"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <p className="italic px-8 text-xl text-justify mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                necessitatibus debitis ipsa.
              </p>
              <div className="px-8 mt-4">
                <Button title="Play" icon={faPlay} dark />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Ecouter;
