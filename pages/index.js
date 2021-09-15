import Head from "next/head";
import Banner from "../components/Banner";
import Dedicated from "../components/Dedicated";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Micro from "../components/Micro";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Services from "../components/Services";
import Values from "../components/Values";
import Work from "../components/Work";
import Pic from "../images/long.png";

export default function Home() {
  return (
    <div className="bg-sblue">
      <Head>
        <title>Source Ally</title>
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

        {/* <Work /> */}
        <section>
          <Work
            img="https://www.bakingbusiness.com/ext/resources/2019/1/CornCrop_Lead.jpg?1548345580"
            title="Our Work"
            description="Farming API Solutions"
            buttonText="Learn More"
          />
        </section>
        <div
          className="relative bg-white rounded-xl -top-24 max-w-[775px] sm:bottom-2 lg:py-6 lg:pl-12 
          lg:pr-4 lg:left-96 lg:ml-48 lg:-top-96 lg:-mt-20"
        >
          <h2 className="text text-green-500 mx-2 text-2xl">
            BUILDING APIs TO CONNECT YOUR BUSINESS
          </h2>
          <p className="px-2 pt-4">
            PROBLEM: Our partner has an internal tool used by marketing for
            customers to purchase software. As business needs have changed, the
            amount of flexibility needed for new products and marketing
            initiatives has increased. The current application is built upon
            monolithic architecture, which prevents flexibility and the
            necessary agility to compete in today’s market. <br /> <br />{" "}
            SOLUTION: Our team created a new application utilizing a
            microservice architecture to act as RESTful APIs. This design
            reduces code complexity, allows rapid changes, decreases response
            time, and provides a high level of reliability. With this new
            platform, the team was able to automate several manual processes,
            reduced errors, and allowed marketing to set up new incentives in
            minutes. We also added additional functionality that resulted in
            market penetration and increased sales. <br /> <br /> TECH STACK:
            AWS (ECS Fargate & Elasticsearch), Docker, React, Node.js, Java,
            RESTful APIs
          </p>
        </div>

        {/* <section>
          <Info
            img="https://www.marbletrend.com/wp-content/uploads/2017/11/Veneto-White_1.jpg"
            title="Our Work"
            description="Farming API Solutions"
            buttonText="Learn More"
          />
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
