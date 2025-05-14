import Image from "next/image";

const APropos = () => {
  return (
    <section
      id="a-propos"
      className="text-foreground flex flex-col gap-4 mb-30"
    >
      <h1>A Propos</h1>
      <div className="grid grid-cols-2 grid_rows-2 gap-2">
        <div>
          <p className="font-mono text-2xl text-justify">
            Après avoir combattu contre les Prussiens, l’armée régulière
            française doit faire face aux insurgés de la Commune qui refusent
            d’une part la capitulation de la France et d’autre part rejettent le
            gouvernement nouvellement élu. Cet saison relate la progression des
            soldats français vers Paris et les combats qui les opposent en
            chemin aux Communards.
            <br />
            <span className="font-bold">Aristide</span> contemple la désolation
            des destructions prussiennes et s’interroge sur le bien-fondé de
            cette guerre civile menée contre des citoyens français.
            <br />
            <br />
            Bien qu’il soit un soldat fidèle à sa patrie, il est traversé de
            doutes, de questions et même parfois d’écœurement quant au devoir
            qui est le sien. Lorsque l’armée régulière arrive dans Paris,
            l’affrontement contre les Communards fait rage. Aux destructions
            causées par les Prussiens, s’ajoutent maintenant celles des insurgés
            : la capitale est détruite de l’intérieur.
            <br />
            <br />
            La guerre et son fracas se font plus présents.{" "}
            <span className="font-bold">Le feu ravage Paris.</span>
            <br />
            En réponse à la révolte des émeutiers, la répression de la Commune
            est impitoyable : aux combats succèdent les exécutions après des
            procès expéditifs. Malgré son épouvante devant les destructions,
            Aristide désapprouve les méthodes de l’armée dont il fait pourtant
            partie : le sang coule à flot et les morts de la guerre civile
            viennent grossir les rangs des victimes du conflit franco-prussien
          </p>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full w-full">
            <Image
              src="/aristide.webp"
              alt="aristide"
              width={400}
              height={400}
              className="rounded-xl drop-shadow-xl drop-shadow-black"
            />
            <p className="italic mt-4 font-bold">Aristide Bosc</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos;
