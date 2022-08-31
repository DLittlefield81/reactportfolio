import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Images from '../../images/dennis5.jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperParalax.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { Typography } from "@mui/material";


const aboutDetails =
  [
  {
    title: "About Me",
    subtitle: 'My Experience',
    text: "I am a Full Stack Developer graduate from the University of Toronto, leveraging over 20 years of customer service, problem-solving, and a critical thinking background. Newly developed skills in JavaScript, MongoDB, ExpressJS, NodeJS, and ReactJS. Experienced in optimizing productivity, efficiency and service quality across various environments.",
    },
    {
      title: "About Me",
      subtitle: "Passion for Tech",
      text: `Throughout my life I have loved technology, At the age of 7, I began coding on a VIC20, and by the age of 14 I had purchased my own computer and began reading web page source code to teach myself HTML. Over time I learned Flash Animation, ActionScript, ColdFusion, PHP, and WordPress.`,
    },
]




export default function SwiperParalax(props) {
  return (
    <>
      <Swiper color="secondary"
        style={{
          "--swiper-navigation-color": "#ff7043",
          "--swiper-pagination-color": "#ff7043",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              `url(${Images})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        {aboutDetails.map((item) =>
          <SwiperSlide>
            <div className="box">
            <div data-swiper-parallax="-300">
              <Typography variant="h3" fontFamily="Montserrat Alternates" color="solids.white">{item.title}</Typography>
            </div>
            <div data-swiper-parallax="-200">
                <Typography variant="h6" fontFamily="Montserrat Alternates" color="solids.white">{item.subtitle}</Typography>
            </div>
            <div data-swiper-parallax="-100"><br />
              <p>
                  <Typography fontSize="16px" fontFamily="Montserrat Alternates" color="solids.white">{item.text}</Typography>
                <br />
              
              </p>
            </div></div>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}
