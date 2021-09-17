import Head from "next/head";
import Banner from "../components/Banner";
import Dedicated from "../components/Dedicated";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Services from "../components/Services";
import Values from "../components/Values";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="bg-blue">
      <Head>
        <title>Home - Source Ally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <Header />

      <main>
        <Hero />

        <h2
          className="text-white justify-center text-center text-2xl my-10 mx-20
           font-light lg:mx-80 lg:my-28"
        >
          Source Ally is a technology services company{" "}
          <h2 className="text-2xl text-green-500 font-medium animate transform uppercase">
            powered by people in slippers!
          </h2>
          Our team of experts has extensive experience solving complex problems
          for our partners and building enterprise applications.
        </h2>

        <Section1 />
        <Services />
        <Values />
        <Dedicated />

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
