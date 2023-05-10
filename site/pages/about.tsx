import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const About = () => {
  return (
    <>
      <Navbar />
      <main className = 'about-us'>
        <div>
          <h2>About Devwise</h2>
          <p>
Devwise was established with the aim of creating a developer-first platform designed by programmers, for programmers. Our objective is to assist both novice and skilled programmers in turning their dreams into reality by providing access to a carefully curated database of websites. Our user-friendly interface is designed to simplify the process of discovering the right resources to bring your ideas to life. Looking ahead, we are committed to expanding our platform to make it more useful than ever before, so that we can continue to support our growing community of developers.</p>
        </div>
      </main>

      <Footer color = {'black'} bgColor = {'defualt'}/>
    </>
  )
}

export default About