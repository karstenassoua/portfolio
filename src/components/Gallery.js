import React from "react";
import Card from "@/components/Card";

export default function Gallery() {
    return (
        <>
            <div id="projects" className="flex flex-col gap-10">
                <div className="flex flex-row gap-8 mx-30">
                    <Card 
                        image={"/images/pottery/pottery.png"} 
                        projectName={"Pottery @ Brown"} 
                        url={"pottery"}
                        skills={["React", "Node", "Next", "HTML/CSS/JS"]} 
                        description={"Led the design of a multi-page website for Brown University's first and only club dedicated to improving access to ceramics experiences on College Hill."}
                        projectLink={"potteryatbrown.com"}/>
                    <Card 
                        image={"/images/pascal/pascal.png"} 
                        projectName={"pascal"} 
                        url={"pascal"}
                        skills={["Pug", "HTML/CSS", "JavaScript"]} 
                        description={"Designed a math web and mobile app meant to be a resource for students to self-study math, get help with questions, and challenge themselves."}
                        isAwarded={true}/>
                </div>
                <div className="flex flex-row gap-8 mx-30">
                    {/* <Card 
                        image={"/images/converse/converse.png"} 
                        projectName={"Converse"} 
                        url={"converse"}
                        skills={["Python Flask", "Mediapipe", "HTML/CSS/JS"]} 
                        description={"Created a web plugin for real-time speech to text for the hearing-impaired, empowering and equipping them to participate actively in remote group discussions, meetings, and interviews."} /> */}
                    <Card 
                        image={"/images/jwr/jwr.png"} 
                        projectName={"Robinson Computing"}
                        url={"jwr"}
                        skills={["React", "Node", "HTML/CSS/JS", "Firebase"]} 
                        description={"Built multi-page website for a secondary school's CS club to increase membership, establish an online presence, and streamline event promotion. "} 
                        projectLink={"https://robo-cs-website.web.app"}/>
                    <Card 
                        image={"/images/greencoin/greencoin.png"} 
                        projectName={"Greencoin"} 
                        url={"greencoin"}
                        skills={["iOS", "Swift", "Figma"]} 
                        description={"Built a mobile app that gamifies sustainable living practices, incentivizing users to adopt eco-friendly habits and reduce their carbon footprint."}
                        isAwarded={true} />
                </div>
            </div>
        </>
    )
}