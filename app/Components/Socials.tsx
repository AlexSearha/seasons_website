import { socialsLinks } from "@/data/socials-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Socials = () => {
  return (
    <div
      id="socials"
      className="flex gap-6 text-amber-100 text-3xl items-center"
    >
      {socialsLinks.map((socialsLink, index) => {
        return (
          <Link
            key={index}
            href={socialsLink.url}
            target={socialsLink.target ? "_blank" : ""}
            className="h-full"
          >
            <FontAwesomeIcon
              icon={socialsLink.icon}
              size="xs"
              className="text-amber-100 hover:text-amber-300 duration-300 transition h-full"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
