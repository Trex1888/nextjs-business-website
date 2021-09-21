import Head from "next/head";
import Dedicated2 from "../components/Dedicated2";
import Dedicated3 from "../components/Dedicated3";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero1 from "../components/Hero1";
import Section2 from "../components/Section2";
import Work1 from "../components/Work1";

function Partner() {
  return (
    <div className="bg-blue relative">
      <Head>
        <title>Partner With Us - Source Ally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero1 />
        <Dedicated2 />

        <section className="mt-24 lg:mt-36">
          <Work1
            img="https://www.logicsofts.co.uk/blog/wp-content/uploads/2020/11/web-application-development.jpg"
            title="APPLICATION DEVELOPMENT"
            name="Pair Programming & XP Practices"
            name1="Test-Driven Development & Code Reviews"
            name2="Daily Standups & Frequent Demos"
            name3="Quality & Maintainability"
            description="As technology consultants, we understand that flexibility and
            adaptability are crucial in the development process. We work
            transparently with our partners to build the right solutions at the
            right time. Whether we are adding features to an existing system or
            building a new application, we work side by side with you. We take an
            Agile approach to prioritize minimum viable product (MVP) and minimum
            marketable features (MMF) to bring our partner value with each
            release. Our delivery teams are the best, and are committed to quality and bring our
            culture and best practices to every engagement."
          />
          <Work1
            img="https://www.remarkablecoating.com/wp-content/uploads/2016/09/AdobeStock_59542205-1024x683.jpeg"
            title="DELIEVERY TEAMS"
            name="Self-Directed Teams"
            name1="Own the Products"
            name2="Innovative and Forward Thinking"
            name3="Shared Task Ownership"
            description="Our delivery team model is how we build technology solutions for our partners. They consistently look to us for advice and expertise, 
            and they trust us to design valuable solutions that work! Our delivery teams understand 
            the value of building relationships and sharing their knowledge to empower others within and across teams. That is why the ownership mindset of our 
            teammates is key to our success. We build a diverse team of experts that don’t operate in silos. Our teams strive to understand your overall vision and develop solutions that align with your business goals."
          />
          <Work1
            img="https://d1yn1kh78jj1rr.cloudfront.net/image/preview/MPaEbz-/graphicstock-two-business-people-talking-in-office_S8BKVJi5XZ_SB_PM.jpg"
            title="COACHING AVAILABLE"
            name="Agile Coaching"
            name1="Executive Technical Coaching"
            name2="Team Training"
            name3="1-on-1 Best Practices Coaching"
            description="As technology consultants, we have guided organizations of all sizes through their Agile transformation. Our Agile Coaches work closely 
            with our partners to help plan the transition, educate teams, and accelerate results.
            We also work with our partners to provide leadership and technical coaching. By pairing our expertise with our partners’ needs, we strengthen the team's ability to tackle complex problems and deliver value iteratively.
            Coaching is one of our many specialites. Needless to say, we don't take coaching litely. Please inquire today about all the optional coaching we have available."
          />
          <Work1
            img="https://www.commuterlearning.com/wp-content/uploads/2018/06/people-doing-research-on-whiteboard.jpg"
            title="PORTFOLIO ANALYSIS"
            name="Product Prioritization"
            name1="Reduce Risk Exposure"
            name2="Maximize Business Value Delivery"
            name3="Evaluate Methods and Technologies"
            description="As our partners grow, so do their product workloads. We partner with organizations to optimize product investments. This allows them to prioritize and balance short-term and long-term strategies. 
            Our experts utilize adaptable processes, tools, and techniques to help align our partners' product roadmap with their organization's goals.
            Whether you are a start-up or a Fortune 500 business we can help. Just ask many of our satisfied clients in the community.
            Please go ahead today and find out more our Portfolio Analysis services. We love to roll up our sleeves and a take a deep dive into a porfolio."
          />
        </section>

        <Dedicated3 />
        <Section2 />
      </main>
      <Footer />
    </div>
  );
}
export default Partner;
