import Head from "next/head";
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

      <Header />

      <main>
        <Hero />

        <h2
          className="text-white justify-center text-center text-2xl my-10 mx-20
          mb-20 leading-relaxed font-extralight lg:mx-80 lg:py-20 lg:mb-20"
        >
          Source Ally is a technology services company,{" "}
          <span className="text-2xl text-btn font-light animate transform uppercase underline">
            powered by people in slippers!
          </span>{" "}
          Our team of experts has extensive experience solving complex problems
          for our partners and building enterprise applications.
        </h2>

        <Section1 />
        <Services />
        <Values
          title="OUR CORE VALUES"
          name="BE A TEACHER"
          name1="BE A LEADER"
          name2="BE AN EXPERT"
          name3="BE AN OWNER"
          name4="BE EXCELLENT"
          name5="BE AMAZING"
        />
        <Dedicated
          info=" We are dedicated to helping our partners grow and become more productive
        through creative and open technology solutions."
          btn1="OUR SERVICES"
          btn2="OUR PROMISE"
          btn3="OUR CLIENTS"
        />

        <section>
          <Work
            img="https://www.bakingbusiness.com/ext/resources/2019/1/CornCrop_Lead.jpg?1548345580"
            title="Our Work"
            description="Farming API Solutions"
            buttonText="LEARN MORE"
            title2="BUILDING APIs TO CONNECT YOUR BUSINESS"
            problem=": A partner of ours has an internal tool used by marketing for customers
            to purchase software. As business needs have changed, the amount of
            flexibility needed for new products and marketing has increased. The
            current application is built upon monolithic architecture, which
            prevents flexibility and the necessary agility to compete in today’s
            market."
            solution=": Our team was able to create a new application with microservice
            architecture to act as RESTful APIs. This design reduces code
            complexity, allows rapid changes, decreases response time, and
            provides a high level of reliability. With this new platform, the team
            was able to automate several manual processes, reduced errors, and
            allowed marketing to set up new incentives in minutes. We also added
            additional functionality that resulted in market penetration and
            increased sales."
            stack=": AWS (ECS Fargate & Elasticsearch), React, Redux, Next.js Node.js"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
