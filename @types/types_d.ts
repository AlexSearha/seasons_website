import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type menuLinkType = {
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

export type socialLink = {
  url: string;
  icon: IconDefinition;
  target: boolean;
};
