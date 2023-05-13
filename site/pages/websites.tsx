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
  const router = useRouter();

  // serach query varible (catagory)
  const { catagory } = router.query;

  // catagaoryData empty array 
  let catagoryData: any = [];


  // filter over data given the tags of the data and the query parameters
  data.forEach((dataObject) => {

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
      case "finance":
        return "finance";
      case "technologys":
      default: return "Explore All"
    }
  };

  return (

    
    <>
      <Head>
        <link rel = 'icon' href = 'https://static.thenounproject.com/png/562360-200.png' />
        <meta name="keywords" content="developer resources, websites, tools, tutorials, frameworks, coding, programming, software development, web development, productivity, efficiency, workflow, handpicked, curated, search, discovery, optimization" />
        <meta name = "author" content = "Catis"/>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Explore the Best Developer Resources - Dev Wise Tools Websites</title>
        <meta name="description" content="Discover the ultimate collection of developer resources with Dev Wise Tools' handpicked website catalog. Streamline your workflow and boost your productivity with the most powerful and efficient tools, tutorials, and frameworks on the web. Explore our selection today and unleash your coding potential." />
      </Head>

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
