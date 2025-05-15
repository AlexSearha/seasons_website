"use client";
import { useEffect, useState } from "react";
import { eventInfoProps, ticketProps } from "@/@types/types_d";
import { ticketListData } from "@/data/tickets-list-data";
import Image from "next/image";

const Ticket = (eventInfos: eventInfoProps) => {
  const [singleTicket, setSingleTicket] = useState<ticketProps>();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 7) + 1;
    const getRandomTicket = ticketListData.find(
      (ticket) => ticket.id === randomNumber
    );
    if (getRandomTicket) {
      setSingleTicket(getRandomTicket);
    }
  }, []);

  return (
    <>
      {singleTicket && (
        <div className="relative">
          <Image
            src={singleTicket.url}
            alt={`Evenement du ${eventInfos.nom}`}
            width={500}
            height={300}
          />
        </div>
      )}
    </>
  );
};

export default Ticket;
