import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import { useRouter } from "next/router";
import data from "../catalog.json";
import Footer from "@/components/Footer";
import Head from "next/head";

interface CatalogData {
  name: string;
  paragraph: string;
  imgLink: string;
  link: string;
  tag: string[];
}

const Websites = () => {
  <Head>
    <title>Website Catalog</title>
  </Head>

  const router = useRouter();

  // serach query varible (catagory)
  const { catagory } = router.query;

  // catagaoryData empty array 
  let catagoryData: any = [];


  // filter over data given the tags of the data and the query parameters
  data.forEach((dataObject: CatalogData) => {

    // check if the catagory is undefined
    if (catagory !== undefined) {

      // iterate through the tags to match with the query parameters
      dataObject.tag.forEach((tag: string) => {
        if (tag === catagory) {
          // if the tag matches the query parameters then push the data object to the catagoryData array
          catagoryData.push(dataObject);
        }
      });
    } else { // if the catagory is undef then push all data to the catagoryData array
      catagoryData.push(dataObject);
    }
  });

  // catagorysearch term function to find equalvilents search terms with the display term
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
      <main className="catalog-page">
        <Navbar />
        <h1 className="catalogue-header">{catagorySearchTerm()}</h1>

        <div className="catalogue">
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
        </div>
      </main>

      <Footer bgColor = {'black'} color = {'white'}/>
    </>
  );
};

export default Websites;
