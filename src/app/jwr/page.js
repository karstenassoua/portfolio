import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectHero from "@/components/ProjectHero";
import ProjectStack from "@/components/ProjectStack";
import "../../styles/globals.css";
import ProjectGallery from "@/components/ProjectGallery";

export default function JWR() {
  return (
    <>
      <Navbar />
      <main className="">
        <ProjectHero 
          projectName={"JWR Computing"} 
          heroImg={"/images/jwr/jwr.png"}
          description={"Supporting equitable computer science education, locally and abroad."} 
          role={"Designer/Developer"}
          timeline={"Dec. 2021 - Mar. 2022"}
          team={["Individual"]}
          skills={["Visual Design", "Branding", "Animation", "Back-end Development", "Front-end Development"]}
          tech={["React", "Node", "HTML/CSS/JS", "Firebase", "OAuth"]}
          >
        </ProjectHero>
        <ProjectStack 
          context={"JWR Computing, a secondary school CS club, needed a scalable digital presence to manage events, grow membership, and centralize resources for their expanding student community. I was brought on to design and develop a full-featured website from the ground up."} 
          problem={"The club had no centralized system for outreach or operations, making it difficult to coordinate weekly meetings, promote events, or track member engagement—especially as attendance and interest began to grow rapidly."} 
          solution={"I built a responsive website using React.js and Node.js, integrating Google Firebase for authentication (OAuth), cloud functions, and backend database management. The site also connected with the club’s calendar and social media platforms to help manage 20 staff and support a 250+ person school-wide CS event."} 
          process={"I designed and developed the site with a modular component-based architecture in React and Node.js, ensuring consistency across pages and ease of future updates. I used Firebase to implement secure login, real-time database access, and scalable backend logic. The entire stack was optimized for both performance and usability by a student audience."} 
          outcomes={"Within five months, the club saw a 300% increase in attendance, broader gender inclusion, and became the largest student-led organization on campus. The website also played a key role in helping the club secure over $70,000 in grants from partners like Google Cloud, GitHub, and Wolfram."} 
          reflection={"This project taught me how to apply full-stack development skills to create real impact for a student organization. I learned to integrate backend services with user-friendly interfaces, scale authentication workflows, and build for both immediate usability and long-term growth."}
        />
        <ProjectGallery imageUrls={["/images/jwr/talks.png", "/images/jwr/join.png", "/images/jwr/members.png", "/images/jwr/create.png"]}/>
      </main>
      <Footer/>
    </>
  );
}