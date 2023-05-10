import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import { useRouter } from "next/router";
import data from "../catalog.json";
import Footer from "@/components/Footer";

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
    if (catagory !== undefined) {
      dataObject.tag.forEach((tag: string) => {
        if (tag === catagory) {
          catagoryData.push(dataObject);
        }
      });
    } else {
      catagoryData.push(dataObject);
    }
  });

  const catagorySearchTerm = () => {
    switch (catagory) {
      case "webdevelopment":
        return "Web Development";
      case "gamedevelopment":
        return "Game Development";
      case "freeimages":
        return "Free Images";
      case "apis":
        return "API's";
      case "productivity":
        return "Productivity";
      case "3dmodels":
        return "3D Models";
      case "practice":
        return "Practice";
      case "textures":
        return "Textures";
      case "documentation":
        return "Documentation";
      case "ai":
        return "AI";
      case "forums":
        return "Forums";
      case "designtools":
        return "Design Tools";
      case "ides":
        return "IDE's";
      case "assets":
        return "Assets";
      case "tutorials":
        return "Tutorials";
      case "fontsandicons":
        return "Fonts & Icons";
      case "insperation":
        return "Insperation";
      case "deploymenttools":
        return "Deployment Tools";
      case "finace":
        return "Finace";
      case "technologys":
      default: return "Explore All"
    }
  };

  return (
    <>
      <div className="catalog-page">
        <Navbar />
        <h1 className="catalogue-header">{catagorySearchTerm()}</h1>

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

      <Footer bgColor = {'black'} color = {'white'}/>
    </>

    
    
  );
};

export default Catalogue;
