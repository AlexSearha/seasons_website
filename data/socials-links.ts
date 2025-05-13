import {
  faBandcamp,
  faFacebook,
  faInstagram,
  faYoutube,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

type socialLink = {
  url: string;
  icon: IconDefinition;
  target: boolean;
};

export const socialsLinks: socialLink[] = [
  {
    url: "https://www.youtube.com/seasonsnovel",
    icon: faYoutube,
    target: true,
  },
  {
    url: "https://www.facebook.com",
    icon: faFacebook,
    target: true,
  },
  {
    url: "https://www.instagram.com/seasonsnovel",
    icon: faInstagram,
    target: true,
  },
  {
    url: "https://www.bandcamp.com/seasonsnovel",
    icon: faBandcamp,
    target: true,
  },
];
