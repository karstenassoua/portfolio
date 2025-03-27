import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <Gallery/>
      </main>
      <Footer/>
    </>
  );
}