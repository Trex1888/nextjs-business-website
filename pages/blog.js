import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Blog1 from "../components/Blog1";
import Nav from "../components/Nav";
import Work3 from "../components/Work3";
import Values1 from "../components/Values1";
import { AiOutlineRight } from "react-icons/ai";

function Blog() {
  return (
    <div className="bg-blue relative">
      <Head>
        <title>Blogs - Source Ally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <main>
        <Blog1 />

        <Values1
          title="BLOG TOPICS"
          name="AGILE"
          name1="CLOUD"
          name2="MOBILE"
          name3="COMMUNITY"
          name4="CULTURE"
          name5="DEVELOPMENT"
        />

        <Work3
          img="https://media.gettyimages.com/photos/business-people-meeting-at-whiteboard-in-office-picture-id699086715"
          main="SUMMER IN REVIEW 2021 - LIZ"
          title1="By Liz Freeman | Culture"
          buttonText="LEARN MORE"
          info="Source Ally had many apprentices during Summer 2021! They gained experience with test-driven development, pair programming, ci/cd, mobile development, and much more. Each apprentice had their own unique experience over the course of the summer, and gave a presentation in August to showcase their growth as developers, consultants, and people...."
        />

        <Work3
          img="https://cdn9.dissolve.com/p/D145_288_117/D145_288_117_1200.jpg"
          main="SUMMER 2021 - CHRISTIAN & CUTLER"
          title1="By Source Ally Team | Culture"
          buttonText="LEARN MORE"
          info="On any given team, lots of time, effort, and thought goes into determining the team culture. This includes Agile practices and ceremonies, the discovery process, collaboration strategies, and communication with stakeholders. A high-priority project with a tight deadline can disrupt these routines. Some practices will need to be shelved until..."
        />

        <Work3
          img="https://www.thegreatcoursesdaily.com/wp-content/uploads/2016/12/shutterstock_373686493.jpg"
          main="BRAG A BIT"
          title1="By Kyle Jones | Development"
          buttonText="LEARN MORE"
          info="The day-to-day work of a software developer is extremely diverse. We are assigned a main project to work on that takes most of our focus but unexpected work can arise since software development is such a team-based activity. Examples of out of the ordinary work may be helping track down a..."
        />

        <Work3
          img="https://upskillnation.com/wp-content/uploads/2019/10/brainstorming.jpg"
          main="RESOURCES FOR DATA EXPLORATION"
          title1="By Shalyn Nile | Data Analytics"
          buttonText="LEARN MORE"
          info="AWS ECS Anywhere First Impressions It isn’t often that we read the mass marketing emails that we all get everyday. AWS sends out an email each week (usually on Tuesday) with a list of recent updates and new services. I get a ton of value out of reading it..."
        />

        <Work3
          img="https://marketplace.canva.com/MACV3FYlesg/1/screen/canva-group-of-people-brainstorming-meeting-in-the-room-MACV3FYlesg.jpg"
          main="IMAUG"
          title1="By Alec Hood | Community"
          buttonText="LEARN MORE"
          info="What is IMAUG? IMAUG is the Iowa Microsoft Azure User Group. As some of you may or may not have noticed if you follow me on LinkedIn or my blog, I have links to join IMAUG everywhere. You might have questions about what is it, what should I expect to..."
        />

        <Work3
          img="https://st2.depositphotos.com/3258807/6817/i/950/depositphotos_68172903-stock-photo-young-creative-people-at-brainstorming.jpg"
          main="REMEMBER TO DREAM"
          title1="By Andrew Christianson | Culture"
          buttonText="LEARN MORE"
          info="One day this spring, I was walking my dogs and forgot my headphones. It was early April; muddy and cool. We generally go about three miles on trails by the creek near our home. The path was quiet, all I could hear was birdsong and water. As I began to daydream,..."
        />

        <Work3
          img="https://aptitive.com/wp-content/uploads/2018/11/business-people-having-brainstorm-PMJH8Y4.jpg"
          main="DEVOPS BEST PRACTICES"
          title1="By Source Ally Team | Infrastructure"
          buttonText="LEARN MORE"
          info="Source Ally saw an opportunity for our partner, a Fortune 500 agriscience company, to accelerate their digital transformation. In its current state, there were a dozen software development teams working on the same product who did not have confidence in the stability of their current cloud infrastructure and deployment environments...."
        />

        <Work3
          img="https://www.mtdtraining.com/wp-content/uploads/2015/09/Employees-having-a-brainstorm-session.jpg"
          main="FREE HTTPS/SSL CERTIFICATES"
          title1="By Adam Beam | Development"
          buttonText="LEARN MORE"
          info="So you’ve discovered the wonderful world of Docker and are running containers left and right. You can effortlessly spin up any application under the sun and browse it locally. What more could a software engineer want in their home server hosting environment? That HTTPS Padlock showing you’re a secure web site..."
        />

        <h2
          className="text-white text-lg flex justify-end items-center font-light px-4 
          max-w-6xl mx-auto cursor-pointer bottom-4 relative lg:bottom-16 lg:justify-center hover:opacity-90 hover:underline"
        >
          Older Blog Posts ---
          <AiOutlineRight className="hover:opacity-90 hover:underline" />
        </h2>
      </main>

      <Footer />
    </div>
  );
}

export default Blog;
