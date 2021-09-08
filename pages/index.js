import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section2 from "../components/Section1";

export default function Home() {
  return (
    <div className="bg-blue-900">
      <Head>
        <title>Source Ally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <Header />
      <Hero />
      <h2
        className="text-white justify-center text-center text-2xl my-10 mx-20
        font-thin lg:mx-60 lg:my-28"
      >
        Source Ally is a technology services company, powered by people in
        slippers! Our team of experts has extensive experience solving complex
        problems for our partners and building enterprise applications.
      </h2>
      <Section2 />
      <Footer />
    </div>
  );
}
