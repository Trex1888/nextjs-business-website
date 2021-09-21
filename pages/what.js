import Head from "next/head";
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
            img="https://ece.lafayette.edu/wp-content/uploads/sites/36/2011/01/ece-program-03.jpg"
            title="Our Work"
            description="AI Machine Learning"
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

export default What;
