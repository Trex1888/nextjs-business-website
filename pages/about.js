import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero1 from "../components/Hero1";
import Dedicated1 from "../components/Dedicated1";
import Values from "../components/Values";
import Work from "../components/Work";
import six from "../images/six.jpg";

function About() {
  return (
    <div className="bg-blue relative">
      <Head>
        <title>About - Source Ally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero1
          name="Embedding Our Iterative, Team-Focused Approach"
          name1="IN EVERYTHING WE DO!"
          img={six}
        />

        <h2
          className="text-white justify-center text-center text-2xl mt-28 mx-16
           leading-relaxed font-thin lg:mx-36 xl:mx-52 lg:mt-36"
        >
          We collaborate with our partners to build solutions as if they were
          our own. Through{" "}
          <span className="highlight"> decades of experience</span>, we've
          learned ideas are only valuable if translated into{" "}
          <span className="highlight">working solutions</span>.
        </h2>

        <Values />
        <Dedicated1 />

        <section>
          <Work
            img="https://www.bakingbusiness.com/ext/resources/2019/1/CornCrop_Lead.jpg?1548345580"
            title="Our Work"
            description="Farming API Solutions"
            buttonText="LEARN MORE"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
