"use client";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const ButtonHome = () => {
  const router = useRouter();
  return (
    <button
      className="fixed bottom-0 right-0 m-6 h-13 w-13 rounded-full bg-amber-100 border-2 border-muted/50 hover:bg-amber-300 transition-colors cursor-pointer"
      onClick={() => router.push("/#home")}
    >
      <FontAwesomeIcon icon={faArrowTurnUp} />
    </button>
  );
};

export default ButtonHome;
