import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero1 from "../components/Hero1";
import Values from "../components/Values";
import Work from "../components/Work";
import seven from "../images/seven.jpg";
import Info3 from "../components/Info3";
import Services from "../components/Services";

function Careers() {
  return (
    <div className="bg-blue relative">
      <Head>
        <title>Careers - Source Ally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero1 name="Powered by People..." name1="IN SLIPPERS!" img={seven} />
        <section className="mt-24 lg:mt-48">
          <Info3 />
          <Values />
          <Services />
          <Work
            img="https://ece.lafayette.edu/wp-content/uploads/sites/36/2011/01/ece-program-03.jpg"
            title="BENEFITS & PERKS"
            description="Mobile App Development"
            buttonText="APPLY TODAY"
            title2="BUILDING APIs TO CONNECT YOUR BUSINESS"
            problem=": Our partner is a windmill factory that heavily invests in custom solutions. 
            Their products reduce noise, noticeable vibration, and wear-and-tear, resulting in longevity 
            and enhanced performance. Currently, there are no mobile solutions for these products. 
            Their marketing team was concerned that there wasn’t enough brand awareness within the market 
            and sought to increase adoption with a mobile app."
            solution=": Our team did extensive user research, and determined it was necessary to develop both 
            an iOS and Android mobile application. These two solutions give users access to product 
            information and provide descriptions for the most common issues/terms. It also includes 
            a sizing program to help users pick the right product for their environment. 
            This application has been adopted worldwide and is currently being used in 32 different countries."
            stack=": Kotlin, Swift, React Native, Nextjs"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Careers;
