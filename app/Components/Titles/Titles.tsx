type TitleProp = {
  title: string;
};

export const TitleH1 = ({ title }: TitleProp) => {
  return <h1 className="text-7xl md:text-7xl font-title uppercase">{title}</h1>;
};

export const TitleH2 = ({ title }: TitleProp) => {
  return <h2 className="text-4xl hd:text-5xl fhd:text-6xl font-title uppercase">{title}</h2>;
};

export const TitleH3 = ({ title }: TitleProp) => {
  return <h3 className="text-4xl md:text-5xl font-title uppercase">{title}</h3>;
};

export const TitleH4 = ({ title }: TitleProp) => {
  return <h4 className="text-3xl md:text-4xl font-title uppercase">{title}</h4>;
};

export const TitleH5 = ({ title }: TitleProp) => {
  return <h4 className="text-2xl md:text-3xl font-title uppercase">{title}</h4>;
};

export const TitleH6 = ({ title }: TitleProp) => {
  return <h4 className="text-xl md:text-3xl font-title uppercase">{title}</h4>;
};
