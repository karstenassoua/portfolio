import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectHero from "@/components/ProjectHero";
import "../../styles/globals.css";

export default function Pascal() {
  return (
    <>
      <Navbar />
      <main className="">
        <ProjectHero 
          projectName={"Glialink"} 
          heroImg={"/images/pascal/pascal.png"}
          description={"People-first and people-friendly mathematics learning resources."} 
          role={"Designer/Developer"}
          timeline={"March 2022"}
          team={["Individual"]}
          skills={["Visual Design", "Branding", "Mobile Design", "Front-end Development"]}
          tech={["Pug", "HTML/CSS/JS", "Figma", "Express.js", "OAuth"]}
          >
        </ProjectHero>
        <ProjectStack 
          context={"I created Pascal to address the lack of intuitive, accessible math learning platforms. Many students, especially those studying independently, are underserved by existing tools. I wanted to build something that made learning math simpler and more engaging."} 
          problem={"Most math platforms are clunky, confusing, or inaccessible to students without strong institutional support, making self-study difficult and discouraging."} 
          solution={"Pascal is a web-based math resource I built to help students around the world self-study, get help with questions, and challenge themselves through clear video tutorials and guided walkthroughs."} 
          process={"I built Pascal using HTML, CSS, JavaScript, and Pug, along with Node.js, Express.js, and Bootstrap. I coded everything in Visual Studio Code, learning new frameworks and debugging as I went."} 
          outcomes={"I created a functional prototype that delivers educational content through a clean and accessible interface. Along the way, I developed full-stack skills and implemented features that laid the groundwork for future functionality like authentication and cloud integration."} 
          reflection={"This project taught me how to manage an end-to-end development process on my own—from ideation to deployment. I strengthened my skills in Node.js, Express.js, and UI design, and learned how to create educational content that puts user experience first."}
        />
        <ProjectCarousel imageUrls={["/images/pascal/Landing.png", "/images/pascal/Signup.png", "/images/pascal/Home.png", "/images/pascal/achieve.png", "/images/pascal/Friends.png", "/images/pascal/Community.png", 
            "/images/pascal/Lessons.png",
            "/images/pascal/Search.png",
            "/images/pascal/Subject.png"]}/>
        <ProjectGallery imageUrls={["/images/pascal/maths.jpg", "/images/pascal/gallery.jpg", "/images/pascal/leaderboard.jpg", "/images/pascal/videos.png"]}/>
      </main>
      <Footer/>
    </>
  );
}