import Head from "next/head";
import Link from "next/link";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

function What() {
  return (
    <div className="bg-sblue relative">
      <Head>
        <title>What We Do - Source Ally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <Header />

      <h1 className="text-white h-48 text-center py-10">WHAT WE DO</h1>
      <h2 className="text-white text-2xl ml-20 pb-52 pt-10 relative top-40">
        <Link href="/">BACK TO HOMEPAGE</Link>
      </h2>

      <Footer />
    </div>
  );
}

export default What;
