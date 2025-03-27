import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectHero from "@/components/ProjectHero";
import ProjectStack from "@/components/ProjectStack";
import "../../styles/globals.css";
import ProjectGallery from "@/components/ProjectGallery";

export default function Converse() {
  return (
    <>
      <Navbar />
      <main className="">
        <ProjectHero 
          projectName={"Converse"} 
          heroImg={"/images/jwr/hero.png"}
          description={"Supporting equitable computer science education, locally and abroad."} 
          role={"Designer/Developer"}
          timeline={"Dec. 2021 - Mar. 2022"}
          team={["Individual"]}
          skills={["Visual Design", "Branding", "Animation", "Back-end Development", "Front-end Development"]}
          tech={["React", "Node", "HTML/CSS/JS", "Firebase", "OAuth"]}
          >
        </ProjectHero>
        <ProjectStack 
          context={"Supporting equitable computer science education, locally and abroad."} 
          problem={"Supporting equitable computer science education, locally and abroad."} 
          solution={"Supporting equitable computer science education, locally and abroad."} 
          process={"Supporting equitable computer science education, locally and abroad."} 
          outcomes={"Supporting equitable computer science education, locally and abroad."} 
          reflection={"Supporting equitable computer science education, locally and abroad."}
          >
        </ProjectStack>
        <ProjectGallery imageUrls={["/images/jwr/talks.png", "/images/jwr/join.png", "/images/jwr/members.png", "/images/jwr/create.png"]}/>
      </main>
      <Footer/>
    </>
  );
}