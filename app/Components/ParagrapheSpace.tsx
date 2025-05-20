type ParagrapheSpaceProp = {
  /** Height in pixels */
  height?: number;
};

const ParagrapheSpace = ({ height = 10 }: ParagrapheSpaceProp) => {
  return <span style={{ height: `${height}px` }} className="block" />;
};

export default ParagrapheSpace;
