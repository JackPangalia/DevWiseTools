import Image from "next/image";

interface Props {
  imgSrc: string;
  imgAlt: string;
  paragraph: string;
  link: string;
  name: string;
}

const ToolCard = ({ imgSrc, paragraph, link, name, imgAlt }: Props) => {
  return (
    <div className="tool-card">
      <Image 
        loader={() => imgSrc} src={imgSrc}
        alt={imgAlt} 
        width={500} 
        height={500} 
      />

      <p>
        {paragraph}
      </p>

      <a 
        href={link}
        target = "_blank"
      >{name}</a>
    </div>
  );
};

export default ToolCard;
