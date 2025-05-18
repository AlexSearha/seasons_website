import { eventInfoProps } from '@/@types/types_d';

export default function TicketModalDetails(eventInfos: eventInfoProps) {
  return (
    <div>
      <h1 className="text-center mb-15">{eventInfos.nom}</h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-6 max-w-screen-lg">
          <p>{eventInfos.description}</p>
          <p>{eventInfos.date}</p>
          <p>{eventInfos.lieu}</p>
          <p>{eventInfos.prix}</p>
        </div>
      </div>
    </div>
  );
}
