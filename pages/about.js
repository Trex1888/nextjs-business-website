import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero1 from "../components/Hero1";
import Values from "../components/Values";
import six from "../images/six.jpg";
import data from "../data/section3";
import { useState } from "react";
import Section3 from "../components/Section3";
import Info4 from "../components/Info4";
import Marquee from "react-fast-marquee";
import Scroller from "../components/Scroller";
import Nav from "../components/Nav";

function About() {
  const [cards, setCards] = useState(data);

  return (
    <div className="bg-blue relative">
      <Head>
        <title>About - Source Ally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />

      <main>
        <Hero1
          name="Embedding Our Positivity, Team-Focused Approach"
          name1="IN EVERYTHING WE DO!"
          img={six}
        />

        <h2
          className="text-white justify-center text-center text-2xl mt-28 mx-16
           leading-relaxed font-thin lg:mx-36 xl:mx-52 lg:mt-44"
        >
          Founded in 1999, Source Ally is a technology services company based in
          Burlington, Vermont. We have{" "}
          <span className="highlight">extensive expertise</span> in precision
          agriculture, energy, media, healthcare, and insurance. We take an
          iterative, cross-functional,{" "}
          <span className="highlight">team-focused approach</span> to software
          development.
        </h2>

        <Values
          title="OUR STORY"
          name="IDEAS"
          name1="PARTNERSHIPS"
          name2="LAUNCH WEBSITE"
          name3="OWNERSHIP MINDSET"
          name4="FLAT SINCE THE BEGINNING"
          name5="POWERED BY PEOPLE... IN SLIPPERS"
        />

        <h2
          className="text-white justify-center text-center text-2xl mx-16
          mb-2 font-normal lg:mx-36 xl:mx-52 lg:mt-36"
        >
          {" "}
          AWS ADVANCED CONSULTING PARTNER
        </h2>
        <h2
          className="text-white justify-center text-center text-2xl mx-16
           mb-2 leading-relaxed font-thin lg:mb-2 lg:mx-28 xl:mx-52"
        >
          Source Ally is one of the only Iowa based AWS Advanced Consulting
          Partners. This status is granted to organizations with a high number
          of technically certified engineers, significant experience creating
          solutions on the AWS platform, and consistent customer satisfaction.
          Our advanced status accelerates our ability to help our partners
          design, architect, build, migrate, and manage their workloads and
          applications.
        </h2>
        <h2
          className="text-white justify-center text-center text-2xl mx-16
           mb-20 leading-relaxed font-thin lg:mb-36 lg:mx-36 xl:mx-56"
        >
          Whether our partners have existing AWS initiatives, or are brand new
          to the cloud scene, our engineers and developers bring with them the
          experience of{" "}
          <span className="highlight">many successful AWS projects.</span>
        </h2>

        <Section3 />
        <Info4 />

        <h2
          className="text-white justify-center text-center text-2xl mt-28 mx-6
           leading-relaxed font-normal mb-2 lg:mx-36 xl:mx-52 lg:mt-44"
        >
          {" "}
          OUR COMMUNITY INVOLVEMENT
        </h2>
        <Marquee speed="90" pauseOnHover="true" className="bg-gray-200">
          <Scroller />
        </Marquee>
      </main>

      <Footer />
    </div>
  );
}

export default About;
