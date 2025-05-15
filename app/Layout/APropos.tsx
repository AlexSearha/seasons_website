import Image from "next/image";

const APropos = () => {
  return (
    <section
      id="a-propos"
      className="text-foreground flex flex-col gap-4 mb-30"
    >
      <h1>À propos</h1>
      <div className="grid grid-cols-2 grid_rows-2 gap-2">
        <div>
          <p className="font-mono text-2xl text-justify">
            Après avoir combattu contre les Prussiens, l&apos;armée régulière
            française doit faire face aux insurgés de la Commune qui refusent
            dune part la capitulation de la France et d&apos;autre part
            rejettent le gouvernement nouvellement élu.{" "}
            <span className="font-bold">
              &quot;1871 : les cendres et le sang&quot;
            </span>{" "}
            relate la progression des soldats versaillais vers Paris et les
            combats qui les opposent en chemin aux Communards.
            <br />
            <br />
            <span className="font-bold">Aristide Fidel</span> contemple la
            désolation des destructions prussiennes et s&apos;interroge sur le
            bien-fondé de cette guerre civile menée contre des concitoyens.
            <br />
            <br />
            Bien qu&apos;il soit un soldat loyal, il est traversé de doutes, de
            questions et même parfois d&apos;écœurement quant au devoir qui est
            le sien. Lorsque l&apos;armée régulière arrive dans Paris,
            <span className="font-bold">
              l&apos;affrontement contre les Communards fait rage
            </span>
            . Aux destructions causées par les Prussiens, s&apos;ajoutent
            maintenant celles des insurgés : la capitale est détruite de
            l&apos;intérieur.
            <br />
            <br />
            La guerre et son fracas se font plus présents.{" "}
            <span className="font-bold">Le feu ravage Paris</span>.
            <br />
            En réponse à la révolte des émeutiers, la répression de la Commune
            est impitoyable : aux combats succèdent les exécutions après des
            procès expéditifs. Malgré son épouvante devant les destructions,
            Aristide désapprouve les méthodes de l&apos;armée dont il fait
            pourtant partie : le sang coule à flot et les morts de la guerre
            civile viennent grossir les rangs des victimes du conflit
            franco-prussien.
          </p>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full w-full">
            <Image
              src="/aristide.webp"
              alt="Aristide Fidel"
              width={400}
              height={400}
              className="rounded-xl drop-shadow-xl drop-shadow-black"
            />
            <p className="italic mt-4 font-bold">Aristide Fidel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos;
