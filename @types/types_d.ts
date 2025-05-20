import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type menuLinkType = {
  title: string;
  url: string;
};

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  title: string;
  href?: string;
  target?: boolean;
  icon?: IconDefinition;
  classSup?: string;
  dark?: boolean;
  onClick?: () => void;
};

export type socialLinkProps = {
  url: string;
  icon: IconDefinition;
  target: boolean;
};

export type eventInfoProps = {
  date: string;
  nom: string;
  lieu: string;
  numeroDeRue: string;
  rue: string;
  ville: string;
  codePostal: string;
  url: string;
  description: string;
  flyer: string;
  prix: string;
};

export type ticketProps = {
  id: number;
  url: string;
};

export type sizeDetectionProps = {
  limit?: number;
};
