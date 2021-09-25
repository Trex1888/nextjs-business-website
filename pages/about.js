import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero1 from "../components/Hero1";
import Values from "../components/Values";
import six from "../images/six.jpg";
import Info3 from "../components/Info3";
import Work1 from "../components/Work1";

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
        <Info3 />

        <section>
          <Work1
            img="https://www.remarkablecoating.com/wp-content/uploads/2016/09/AdobeStock_59542205-1024x683.jpeg"
            title="BENEFITS"
            name="Self-Directed Teams"
            name1="Own the Products"
            name2="Innovative and Forward Thinking"
            name3="Shared Task Ownership"
            // description="Our delivery team model is how we build technology solutions for our partners. They consistently look to us for advice and expertise,
            // and they trust us to design valuable solutions that work! Our delivery teams understand
            // the value of building relationships and sharing their knowledge to empower others within and across teams. That is why the ownership mindset of our
            // teammates is key to our success. We build a diverse team of experts that don’t operate in silos. Our teams strive to understand your overall vision and develop solutions that align with your business goals."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
