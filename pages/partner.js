import Head from "next/head";
import Banner from "../components/Banner";
import Dedicated from "../components/Dedicated";
import Dedicated1 from "../components/Dedicated1";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero1 from "../components/Hero1";
import Section1 from "../components/Section1";
import Work from "../components/Work";

function Partner() {
  return (
    <div className="bg-blue relative">
      <Head>
        <title>Partner With Us - Source Ally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <Header />

      <main>
        <Hero1 />
        <br />
        <br />
        <br />
        <Dedicated1 />

        <section>
          <Work
            img="https://www.bakingbusiness.com/ext/resources/2019/1/CornCrop_Lead.jpg?1548345580"
            title="Our Work"
            description="Farming API Solutions"
            buttonText="LEARN MORE"
          />
        </section>

        <Dedicated />
        <Section1 />
      </main>
      <Footer />
    </div>
  );
}
export default Partner;
