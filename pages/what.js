import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero1 from "../components/Hero1";
import Info3 from "../components/Info3";
import Values from "../components/Values";
import Work from "../components/Work";
import what from "../images/what.jpg";

function What() {
  return (
    <div className="bg-blue relative">
      <Head>
        <title>What We Do - Source Ally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero1
          name="We Solve Complex Problems with"
          name1="SOFTWARE SOLUTIONS"
          img={what}
        />
        <h2
          className="text-white justify-center text-center text-2xl mt-28 mx-16
           leading-relaxed font-thin lg:mx-36 xl:mx-52 lg:mt-44"
        >
          We collaborate with our partners to build solutions as if they were
          our own. Through{" "}
          <span className="highlight"> decades of experience</span>, we've
          learned ideas are only valuable if translated into{" "}
          <span className="highlight">working solutions</span>.
        </h2>

        <Values
          title="OUR EXPERTISE"
          name="SOFTWARE DEVELOPMENT"
          name1="QUALITY ENGINEERING"
          name2="DEVOPS/CLOUD"
          name3="USER EXPERIENCE"
          name4="DATA ANALYTICS"
          name5="DELIVERY LEAD"
        />
        <Info3 />

        <section>
          <Work
            img="https://ece.lafayette.edu/wp-content/uploads/sites/36/2011/01/ece-program-03.jpg"
            title="Our Work"
            description="Mobile App Development"
            buttonText="LEARN MORE"
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

export default What;
