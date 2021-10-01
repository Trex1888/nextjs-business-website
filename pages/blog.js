import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Values from "../components/Values";
import Work from "../components/Work";
import Blog1 from "../components/Blog1";
import Nav from "../components/Nav";
import Info3 from "../components/Info3";
import Nav1 from "../components/Nav1";

function Blog() {
  return (
    <div className="bg-blue relative">
      <Head>
        <title>Blogs - Source Ally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* <Nav1 /> */}

      <main>
        <Blog1 />
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

        <Values />
        <Info3 />

        <section>
          <Work
            img="https://www.bakingbusiness.com/ext/resources/2019/1/CornCrop_Lead.jpg?1548345580"
            title="Our Work"
            description="Farming API Solutions"
            buttonText="LEARN MORE"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
