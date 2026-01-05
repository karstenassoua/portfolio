import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectHero from "@/components/ProjectHero";
import PageContainer from "@/components/blocks/PageContainer";
import BlockRenderer from "@/components/blocks/BlockRenderer";
import { greencoinData } from "@/data/projects/greencoin";
import "../../styles/globals.css";
import "@/styles/blocks.css";

export default function Greencoin() {
  const { projectName, heroImg, description, role, timeline, team, skills, tech, blocks } = greencoinData;

  return (
    <>
      <Navbar />
      <main className="">
        <ProjectHero 
          projectName={projectName} 
          heroImg={heroImg}
          description={description} 
          role={role}
          timeline={timeline}
          team={team}
          skills={skills}
          tech={tech}
        />
        <PageContainer>
          <BlockRenderer blocks={blocks} />
        </PageContainer>
      </main>
      <Footer/>
    </>
  );
}
