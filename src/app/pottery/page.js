import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectHero from "@/components/ProjectHero";
import ProjectStack from "@/components/ProjectStack";
import "../../styles/globals.css";
import ProjectGallery from "@/components/ProjectGallery";

export default function Pottery() {
  return (
    <>
      <Navbar />
      <main className="">
        <ProjectHero 
          projectName={"Pottery @ Brown"} 
          heroImg={"/images/pottery/pottery.png"}
          description={"Expanding access to ceramics education and studio resources on College Hill."} 
          role={"Designer/Developer"}
          timeline={"Jan. 2025 - Mar. 2025"}
          team={["Yandi Ma (PM)",
             "Henry Greenhut (Designer/Developer)", 
             "Catherine Yu (Front-end Developer)",
              ]}
          skills={["Visual Design", "Branding", "Front-end Development"]}
          tech={["React", "Node", "Next", "HTML/CSS/JS"]}
          >
        </ProjectHero>
        <ProjectStack 
          context={"Pottery @ Brown reached out for a new website that reflected their mission of creative access, helped manage student engagement, and showcased the community and artwork behind their growing organization. As a non-member, I collaborated closely with their leadership team to bring their vision to life."} 
          problem={"The club lacked a centralized, visually cohesive platform for sharing program information, onboarding new members, and highlighting student work. They needed a site that was not only functional, but also reflected the warmth and professionalism of their community."} 
          solution={"I designed and developed a responsive, photo-rich website using Next.js and React.js, featuring clear program breakdowns, a gallery of student work, a leadership directory, FAQs, and a built-in scheduling section. The site connects to Pottery @ Brown’s Instagram and features professional shots of their work."} 
          process={"I created wireframes and high-fidelity mockups in Figma, iterating with Pottery @ Brown’s leadership to align on visuals and content. I then built the frontend using React components within a Next.js framework for optimized performance and routing."} 
          outcomes={"The live site offers a centralized hub for the club’s programs, leadership, gallery, and workshops. It enables member engagement through an integrated calendar and streamlined onboarding process, and offers flexibility to update content seasonally as the club evolves."} 
          reflection={"This project taught me how to develop a digital identity for a community-driven organization I wasn’t a member of. I improved my workflow between Figma and React, built a performant site using the Next.js stack, and practiced translating real client needs into intuitive, scalable design and code."}
        />
        <ProjectGallery imageUrls={["/images/pottery/join.png", "/images/pottery/gallery.png", "/images/pottery/faq.png", "/images/pottery/admin.png"]}/>
      </main>
      <Footer/>
    </>
  );
}