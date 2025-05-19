'use client';
import { eventInfoProps } from '@/@types/types_d';
import { getSplitObjectTime } from '@/utils/timeUtilsFunctions';
import Button from '../Button';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

export default function TicketModalDetails(eventInfos: eventInfoProps) {
  const { day, month, year } = getSplitObjectTime(eventInfos.date);

  return (
    <div className="flex h-full gap-10 p-6">
      <img
        src={eventInfos.flyer ? eventInfos.flyer : '/tickets/ticket_fanfare.webp'}
        alt={`Flyer de l'événement ${eventInfos.nom}`}
        className="w-auto h-[400px] rounded-lg"
      />
      <div className="w-full max-w-[500px] h-auto flex flex-col">
        <h1 className="leading-none">{eventInfos.nom}</h1>
        <div className="grow flex flex-col justify-between">
          <div className="flex flex-col gap-2 shrink mt-4">
            <p className="md:text-4xl font-title font-bold text-muted">{`${day} ${month} ${year}`}</p>
            <p className="md:text-3xl font-mono font-bold">{eventInfos.lieu}</p>
            <p className="md:text-2xl font-mono italic">{`${eventInfos.numeroDeRue} ${eventInfos.rue}, ${eventInfos.codePostal} ${eventInfos.ville}`}</p>
            <p className="mt-2">{eventInfos.description}</p>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              title="Reserver"
              href={eventInfos.url}
              target
              dark
              icon={faSearchPlus}
              classSup="text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
