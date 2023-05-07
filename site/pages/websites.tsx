import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import { useRouter } from "next/router";
import data from "../catalog.json";

interface Tool {
  name: string;
  paragraph: string;
  imgLink: string;
  link: string;
}


const Catalogue = () => {
  const router = useRouter();
  const { catagory } = router.query;
  console.log(catagory);

  data.forEach((tags) => {
    tags.tag?.forEach((tag) => {
      if (tag === catagory) {
        console.log(tag);
      }
    });
  });

  return (
    <div className="catalog-page">
      <Navbar />
      <h1 className="catalogue-header">Explore</h1>

      <main className="catalogue">
        {/* {data.map((tool: Tool, index: number) => (
          
          <ToolCard 
          
            key={index}
            name={tool.name}
            paragraph={tool.paragraph}
            imgSrc={tool.imgLink}
            imgAlt='image'
            link={tool.link}
          />
          
        ))} */}

        {data.map((tool, index: number) => {

          console.log(tool.tag?.forEach((tag) => {
            if (tag === catagory) {
           
            }
          }))
          tool.tag?.forEach((tag) => {
            if (tag === catagory) {
              console.log(tag)
            }
          })
          return (
            <ToolCard 
          
              key={index}
              name={tool.name}
              paragraph={tool.paragraph}
              imgSrc={tool.imgLink}
              imgAlt='image'
              link={tool.link}
            />
          )
        })}

        {data.map((tool, index:number) => {
          tool.tag?.forEach((tag) => {
            if
          })
        })}
      </main>
    </div>
  );
};

export default Catalogue;
