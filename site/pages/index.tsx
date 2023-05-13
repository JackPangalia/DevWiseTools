import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel = 'icon' href = 'https://static.thenounproject.com/png/562360-200.png' />
        <meta name="keywords" content="developer resources, tools, tutorials, frameworks, productivity, workflow, minimalism, curation, search, discovery, handpicked, efficiency, optimization, coding, programming, software development, web development" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name = "author" content = "Catis"/>
        <title>Dev Wise Tools - Simplifying Your Search for the Best Development Resources</title>
        <meta name="description" content="Discover a curated collection of powerful developer resources with Dev Wise Tools. Streamline your workflow and boost your productivity with our minimalist catalog of tools, tutorials, and frameworks. Simplify your search for the best development resources and stay ahead of the curve with Dev Wise Tools today." />
      </Head>

      <Navbar />
      <h1 className="intro-text">Find Coding Tools🔧</h1>
      <main className="main-catagory-finder-section">
        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "webdevelopment" },
            });
          }}
        >
          Web developoment ⌨️
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "gamedevelopment" },
            });
          }}
        >
          Game development 🎮
        </button>
        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "freeimages" },
            });
          }}
        >
          Free images 📸
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "apis" },
            });
          }}
        >
          APIs{" "}
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "productivity" },
            });
          }}
        >
          Productivity 🏋️‍♀️
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "3dmodels" },
            });
          }}
        >
          3D models
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "practice" },
            });
          }}
        >
          Practice 🧑‍💻
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "textures" },
            });
          }}
        >
          Textures 🖌
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "documentation" },
            });
          }}
        >
          Documenation 📑
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "ai" },
            });
          }}
        >
          AI 🤖
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "forums" },
            });
          }}
        >
          Forums{" "}
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "designtools" },
            });
          }}
        >
          Design Tools 🎨
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "ides" },
            });
          }}
        >
          IDEs 🖥
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "assets" },
            });
          }}
        >
          Assets
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "tutorials" },
            });
          }}
        >
          Tutorials 🎥
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "fontsandicons" },
            });
          }}
        >
          Fonts and Icons{" "}
        </button>
        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "insperation" },
            });
          }}
        >
          Inspiration 🧐
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "deploymenttools" },
            });
          }}
        >
          Deployment tools{" "}
        </button>

        <button
          onClick={() => {
            router.push({
              pathname: "/websites",
              query: { catagory: "finance" },
            });
          }}
        >
          finance 📈
        </button>
      </main>

      <section className="index-website-catagory-website">
        <Link href="/websites">Find Websites</Link>

        <p>
          Explore our carefully curated collection of websites, handpicked to
          enhance your development experience.
        </p>
      </section>

      <section className="index-website-catagory-about">
        <Link href="/about">Learn About us</Link>

        <p>Learn about our mission, our future and usx</p>
      </section>

      <Footer bgColor={"white"} color={"black"} />
    </>
  );
};

export default Home;
