import Head from "next/head";
import Banner from "../components/Banner";
import Dedicated1 from "../components/Dedicated1";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import Values1 from "../components/Values1";
import Work from "../components/Work";

function What() {
  return (
    <div className="bg-blue relative">
      <Head>
        <title>What We Do - Source Ally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <Header />

      <main>
        <Hero2 />
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

        <Values1 />
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

export default What;
