import React from "react";
import Project from "../Projects";
import Images from '../../images/projects/';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./SwiperGallery.css";

import Team from '@mui/icons-material/Groups';
import Solo from '@mui/icons-material/Person';

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const projects = [
    {
        group: Solo,
        colour: "#002B5B",
        size: 'Individual Project',
        title: "Dennis Littlefield Portfolio",
        image: Images.reactPortfolio,
        alt: "Dennis Littlefield Portfolio",
        tech: "ReactJS, MaterialUI, Swiper, muiTheme",
        role: "Sole Developer",
        description: "Profile website to showcase developed projects",
        repository: "https://github.com/DLittlefield81/reactportfolio",
        deployed: "https://dlittlefield81.github.io/reactportfolio/"
    },
    {
        group: Team,
        colour: "#7c43bd",
        size: 'Team of Three',
        title: "Interrobang Auction House",
        image: Images.interrobang,
        alt: "Interrobang Auction House",
        tech: "MongoDB, Express, React, Node.",
        role: "Developed Front End",
        description: "MERN Full Stack Art Auction house website.",
        repository: "https://github.com/RGarrettLee/Interrobang-Auction-House",
        deployed: "https://interrobang-auction-house.herokuapp.com/"
    },
    {
        group: Team,
        colour: "#7c43bd",
        size: 'Team of Three',
        title: "Pet Playdate",
        image: Images.petPlaydate,
        alt: "Pet Playdate",
        tech: "ExpressJS, Handlebars, SQL",
        role: "Developed: Front End",
        description: "Schedule a playdate for your pet",
        repository: "https://github.com/DLittlefield81/pet-playdate",
        deployed: "https://pet-play-date.herokuapp.com/"
    },
    {
        group: Team,
        colour: "#7c43bd",
        size: 'Team of Two',
        title: "FlyteChecker",
        image: Images.flyteChecker,
        alt: "HTML CSS JavaScript AmadeusAPI",
        tech: "RestAPI, JavaScript, HTML, CSS",
        role: "Developed: JavaScript with API Calls",
        description: "View flight information between chosen cities",
        repository: "https://github.com/DLittlefield81/FlytCheckr",
        deployed: "https://dlittlefield81.github.io/FlytCheckr/"
    },
    {
        group: Solo,
        colour: "#002B5B",
        size: 'Individual Project',
        title: "The Littlefield Portfolio",
        image: Images.htmlPortfolio,
        alt: "The Littlefield Portfolio",
        tech: "HTML, CSS",
        role: "Sole Developer",
        description: "Profile website to showcase developed projects",
        repository: "https://github.com/DLittlefield81/DennisLittlefieldPortfolio",
        deployed: "https://dlittlefield81.github.io/DennisLittlefieldPortfolio/"
    },
    {
        group: Solo,
        colour: "#002B5B",
        size: 'Individual Project',
        title: "Horiseon",
        image: Images.horiseon,
        alt: "Horiseon",
        tech: "HTML CSS REFACTOR",
        role: "Sole Developer",
        description: "Refactoring website",
        repository: "https://github.com/DLittlefield81/horiseon-web",
        deployed: "https://dlittlefield81.github.io/horiseon-web/"
    },
    {
        group: Solo,
        colour: "#002B5B",
        size: 'Individual Project',
        title: "Wordwise",
        image: Images.wordwise,
        alt: "Wordwise",
        tech: "HTML, CSS, JavaScript",
        role: "Sole Developer",
        description: "Trivia game to test your knowledge of javascript",
        repository: "https://github.com/DLittlefield81/WordWise",
        deployed: "https://dlittlefield81.github.io/WordWise/"
    },
    {
        group: Solo,
        colour: "#002B5B",
        size: 'Individual Project',
        title: "Text Editor",
        image: Images.jate,
        alt: "Text Editor",
        tech: "Progressive Web App, JavaScript, ExpressJS",
        role: "Sole Developer",
        description: "Text editor installable PWA",
        repository: "https://github.com/DLittlefield81/TextEditor",
        deployed: "https://mighty-retreat-28358.herokuapp.com/"
    },
    {
        group: Solo,
        colour: "#002B5B",
        size: 'Individual Project',
        title: "Tech Blog",
        image: Images.techBlog,
        alt: "Tech Blog",
        tech: "ExpressJS, Handlebars, Sessions",
        role: "Sole Developer",
        description: "Tech Blog where logged in users may create posts",
        repository: "https://github.com/DLittlefield81/TechBlog",
        deployed: "https://blooming-brushlands-35431.herokuapp.com/"
    },
    {
        group: Solo,
        colour: "#002B5B",
        size: 'Individual Project',
        title: "Campos Lab",
        image: Images.camposlab,
        alt: "Campos Lab",
        tech: "WordPress",
        role: "Sole Developer",
        description: "Campos Lab @ SickKids performing epigenetics research",
        repository: "#",
        deployed: "https://lab.research.sickkids.ca/campos/"
    },
    {
        group: Solo,
        colour: "#002B5B",
        size: 'Individual Project',
        title: "Livelihood Kitchen",
        image: Images.livelihoodkitchen,
        alt: "Livelihood Kitchen",
        tech: "WordPress",
        role: "Sole Developer",
        description: "Food delivery service run by new Canadian residants ",
        repository: "#",
        deployed: "https://livelihoodkitchen.com"
    },
    {
        group: Solo,
        colour: "#002B5B",
        size: 'Individual Project',
        title: "Tashan Events",
        image: Images.tashan,
        alt: "Tashan Events",
        tech: "WordPress",
        role: "Sole Developer",
        description: "South Asian Bollywood events",
        repository: "#",
        deployed: "https://tashanevents.ca/"
    },
];


export default function SwiperGallery() {

    return (
        <>
            <Swiper 
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {projects.map((project) =>
                <SwiperSlide>
                        <Project group={<project.group />} colour={project.colour} size={project.size} title={project.title} image={project.image} alt={project.alt} tech={project.tech} role={project.role}  description={project.description} repository={project.repository} deployed={project.deployed} />
                </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}
