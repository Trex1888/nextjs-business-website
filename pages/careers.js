import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero1 from "../components/Hero1";
import Values from "../components/Values";
import seven from "../images/seven.jpg";
import Info5 from "../components/Info5";
import Benefits from "../components/Benefits";
import Services1 from "../components/Services1";
import Pics from "../components/Pics";

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
          <Info5 />
          <Values
            title="OUR CULTURE"
            name="PEOPLE FIRST"
            name1="TEAM-ORIENTED"
            name2="SELF-ORGANIZING"
            name3="COMMUNITY"
            name4="DEDICATED TO SUCCESS"
            name5="CHALLENGING WORK"
          />
        </section>
        <Services1 />
        <Benefits
          img="https://www.lifeofpix.com/wp-content/uploads/2018/08/308-name05903-chim-1600x989.jpg"
          bens="BENEFITS"
          perks="PERKS"
          name="Health, Dental, Vision Insurance"
          name1="Matching 401K Immediate Vesting"
          name2="P.T.O. Paid Time Off"
          name3="8 Paid Holidays"
          name4="Parental Leave"
          name5="Disability & Life Insurance"
          name6="Assistance Program"
          name7="Ally Gear"
          name8="Professional Development"
          name9="Sponsored Training"
          name10="Flexible Work Schedules"
          name11="Birthday Treats"
          name12="Teammate Discounts"
        />
        <Pics />
      </main>
      <Footer />
    </div>
  );
}

export default Careers;
