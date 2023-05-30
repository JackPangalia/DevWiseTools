import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="https://static.thenounproject.com/png/562360-200.pngl"
        />
        <meta
          name="keywords"
          content="about, DevWiseTools, development resources, web development, software development, developers, high-quality, handpicked, curated, productivity, workflow, mission, vision, empower, streamline, coding potential, future"
        />
        <link
          rel="icon"
          href="https://static.thenounproject.com/png/562360-200.png"
        />
        <title>
          About Dev Wise Tools - Discover Our Mission and Vision for Developers
        </title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Catistec" />
        <meta
          name="description"
          content="At Dev Wise Tools, we're dedicated to simplifying the search for the best development resources on the web. Our mission is to empower developers with handpicked, high-quality websites that streamline their workflow and boost their productivity. Discover our vision for the future of software development and join us in unleashing your coding potential today."
        />
      </Head>

      <Navbar />
      <main className="about-us">
        <div>
          <h2 className="">About Devwisetools</h2>
          <p>
            Devwisetools was established with the aim of creating a developer-first
            platform designed by programmers, for programmers. Our objective is
            to assist both novice and skilled programmers in turning their
            dreams into reality by providing access to a carefully curated
            database of websites. Our user-friendly interface is designed to
            simplify the process of discovering the right resources to bring
            your ideas to life. Looking ahead, we are committed to expanding our
            platform to make it more useful than ever before, so that we can
            continue to support our growing community of developers.
          </p>
        </div>
      </main>

      <Footer color={"black"} bgColor={"defualt"} />
    </>
  );
};

export default About;
