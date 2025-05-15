import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type menuLinkProps = {
  title: string;
  url: string;
};

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  title: string;
  href?: string;
  target?: boolean;
  icon?: IconDefinition;
  classSup?: string;
  dark?: boolean;
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
  adresse: string;
  ville: string;
  codePostal: string;
  url: string;
};

export type ticketProps = {
  id: number;
  url: string;
  isIllustRight: boolean;
};
