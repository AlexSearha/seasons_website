import { events } from '@/data/events-data';
import Ticket from '../Components/Tickets/Ticket';
import moment from 'moment';
import Image from 'next/image';
import Button from '../Components/Button';

const Evenements = () => {
  const filterEventToCome = events.filter((event) => {
    const eventDate = moment(event.date, 'YYYY-MM-DD').toDate();
    const currentDate = new Date();
    return eventDate > currentDate;
  });

  return (
    <section id="evenements" className="text-foreground flex flex-col gap-4 mb-30">
      <div className="flex justify-arround items-center mb-15">
        <div className="flex justify-evenly items-center w-full">
          <Image
            src="/decoration/trompettes.webp"
            alt="trompettes 1871"
            className="drop-shadow-xss drop-shadow-black"
            height={150}
            width={150}
          />
          <h1 className="text-center">Evenements</h1>
          <Image
            src="/decoration/trompettes.webp"
            alt="trompettes 1871"
            className="drop-shadow-xss drop-shadow-black"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-6 max-w-screen-lg">
          {filterEventToCome.length > 0 ? (
            filterEventToCome.map((evenement, i) => <Ticket key={i} {...evenement} />)
          ) : (
            <div className="flex flex-col items-center justify-center">
              <h3>Nul tambours ne raisonnent pour l&apos;instant</h3>
              <p className="font-mono text-2xl">Ferez-vous appel à notre escouade ?</p>

              <div className="mt-3">
                <Button title="Nous contacter" dark href="/#contact" classSup="scale-75" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Evenements;
