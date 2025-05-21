'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useModal } from '@/providers/ModalProviders';
import Button from '../Button';
import TicketModalDetails from './TicketModalDetails';
// TS Types
import { eventInfoProps, ticketProps } from '@/@types/types_d';
import { ticketListData } from '@/data/tickets-list-data';
import { getSplitObjectTime } from '@/utils/timeUtilsFunctions';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Ticket = (eventInfos: eventInfoProps) => {
  const [singleTicket, setSingleTicket] = useState<ticketProps | null>(null);
  const { day, month, year } = getSplitObjectTime(eventInfos.date);
  const modal = useModal();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    const getRandomTicket = ticketListData.find((ticket) => ticket.id === randomNumber);
    if (getRandomTicket) {
      setSingleTicket(getRandomTicket);
    }
  }, []);

  const handleOpenModal = (eventInfos: eventInfoProps) => {
    modal.openModal(<TicketModalDetails {...eventInfos} />);
  };

  return (
    <>
      {singleTicket && (
        <div className="relative h-auto w-[500px] drop-shadow-black/50 drop-shadow-lg overflow-hidden">
          <Image
            id="ticket-evenement"
            src={singleTicket.url}
            alt={`Evenement du ${eventInfos.nom}`}
            width={500}
            height={300}
          />
          <div id="ticket-content" className="absolute top-0 left-0 w-full h-full px-10 py-6 flex">
            <div
              id="ticket-content--date"
              className="flex flex-col justify-center items-center text-center  max-w-[150px] shrink font-title text-foreground"
            >
              <h2 className="text-5xl">{day}</h2>
              <p className="font-bold text-2xl">{`${month} ${year}`}</p>
            </div>
            <div
              id="ticket-content--title"
              className="grow flex flex-col items-center justify-around text-shadow-white/80 text-shadow-xs"
            >
              <p className="font-bold text-3xl font-title">{eventInfos.nom}</p>
              <Button
                title="En savoir plus"
                icon={faSearchPlus}
                dark
                classSup="scale-60"
                onClick={() => handleOpenModal(eventInfos)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ticket;
