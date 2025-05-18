'use client';
import { eventInfoProps } from '@/@types/types_d';

export default function TicketModalDetails(eventInfos: eventInfoProps) {
  return (
    <div>
      <img
        src={eventInfos.flyer}
        alt={`Flyer de l'événement ${eventInfos.nom}`}
        className="w-max-[100px] h-max-[150px] rounded-lg"
      />
    </div>
  );
}
