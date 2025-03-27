import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectHero from "@/components/ProjectHero";
import ProjectStack from "@/components/ProjectStack";
import "../../styles/globals.css";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Greencoin() {
  return (
    <>
      <Navbar />
      <main className="">
        <ProjectHero 
          projectName={"Greencoin"} 
          heroImg={"/images/greencoin/greencoin.png"}
          description={"Equipping and rewarding the world for environmental care."} 
          role={"Designer/Developer"}
          timeline={"Dec. 2021 - Mar. 2022"}
          team={["Ryan Bascos (Back-end Developer)"]}
          skills={["Visual Design", "Branding", "Mobile Design", "iOS Development"]}
          tech={["iOS", "Swift", "XCode", "Figma"]}
          >
        </ProjectHero>
        <ProjectStack 
          context={"I created Greencoin to make environmentally friendly habits easier and more rewarding—especially for students who want to take action but lack incentives or tools to do so consistently."} 
          problem={"Recycling and sustainable habits often feel like thankless tasks, especially among students. I wanted to build a system that motivated environmentally conscious behavior through community and real rewards."} 
          solution={"Greencoin is a mobile app designed for iOS that lets users log their recycling activity, compete with friends, and earn 'Greencoins'—a digital currency redeemable in a store or for donations. The app also includes eco-tips, recycling guides, and timers for sustainable habits like shorter showers."} 
          process={"I designed the app using Figma to prototype the full UX/UI, and built it in Swift using Xcode. I also integrated Google and email authentication for secure login, designed gamified challenges, and developed the digital rewards system to track user activity over time."} 
          outcomes={"I launched a polished, high-fidelity prototype that combined environmental education, habit tracking, and gamification. The app structure supports real-time user engagement, digital rewards, and future scalability across platforms like Android."} 
          reflection={"Through this project, I deepened my skills in iOS development, learned to create meaningful user incentives, and saw firsthand how behavior design can support sustainability. I also practiced balancing technical constraints with creative feature design in a way that encourages real-world impact."}
        />
        <ProjectCarousel imageUrls={["/images/greencoin/Landing.png", "/images/greencoin/Login.png", "/images/greencoin/Info.png"]}/>
      </main>
      <Footer/>
    </>
  );
}