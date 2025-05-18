import { socialLinkProps } from '@/@types/types_d';
import { faBandcamp, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const socialsLinks: socialLinkProps[] = [
  {
    url: 'https://www.youtube.com/seasonsnovel',
    icon: faYoutube,
    target: true,
  },
  {
    url: 'https://www.facebook.com',
    icon: faFacebook,
    target: true,
  },
  {
    url: 'https://www.instagram.com/seasonsnovel',
    icon: faInstagram,
    target: true,
  },
  {
    url: 'https://www.bandcamp.com/seasonsnovel',
    icon: faBandcamp,
    target: true,
  },
];
