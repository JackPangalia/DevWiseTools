import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import { useRouter } from "next/router";
import data from "../catalog.json";

interface CatalogData {
  name: string;
  paragraph: string;
  imgLink: string;
  link: string;
  tag: string[];
}

const Catalogue = () => {
  const router = useRouter();
  const { catagory } = router.query;
  let catagoryData: any = [];

  // filter over data given the tags of the data and the query parameters
  data.forEach((dataObject: CatalogData) => {
    dataObject.tag.forEach((tag: string) => {
      if (tag === catagory) {
        catagoryData.push(dataObject);
      }
    });
  });


  return (
    <div className="catalog-page">
      <Navbar />
      <h1 className="catalogue-header">Explore</h1>

      <main className="catalogue">
      
        {catagoryData.map((tool: CatalogData, index: number) => (
          <ToolCard
            key={index}
            name={tool.name}
            paragraph={tool.paragraph}
            imgSrc={tool.imgLink}
            imgAlt="image"
            link={tool.link}
          />
        ))}
      </main>
    </div>
  );
};

export default Catalogue;
