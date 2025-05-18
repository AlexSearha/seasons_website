import { events } from '@/data/events-data';
import Ticket from '../Components/Tickets/Ticket';
import moment from 'moment';

const Evenements = () => {
  const filterEventToCome = events.filter((event) => {
    const eventDate = moment(event.date, 'YYYY-MM-DD').toDate();
    const currentDate = new Date();
    return eventDate > currentDate;
  });
  return (
    <section id="evenements" className="text-foreground flex flex-col gap-4 mb-30">
      <h1 className="text-center mb-15">Evenements</h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-6 max-w-screen-lg">
          {filterEventToCome.map((evenement, i) => (
            <Ticket key={i} {...evenement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evenements;
