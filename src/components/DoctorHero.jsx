import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./DoctorHero.css";
import bgSlide1 from "../assets/1.jpeg";
import bgSlide2 from "../assets/2.jpeg";
import bgSlide3 from "../assets/3.jpeg";
import potraitImg from "../assets/111.png";
import Navbar from "./Navbar";

const slides = [
  { img: bgSlide1, title: "Consultant & Orthopaedic Surgeon" },
  { img: bgSlide2, title: "Joint Replacement Specialist" },
  { img: bgSlide3, title: "Sports Injury Expert" },
];

export default function DoctorHero() {
  const swiperRef = useRef(null);

  return (
    <div className="dh-wrapper">
      <Navbar />

      <section className="dh-hero">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="slide"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={900}
          pagination={{ clickable: true, el: ".dh-custom-pagination" }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="dh-swiper"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              {/* Full-bleed background image per slide */}
              <div className="dh-slide-bg">
                <img src={slide.img} alt={slide.title} className="dh-slide-img" />
              </div>

              {/* Wave SVG */}
              <svg
                className="dh-wave"
                viewBox="0 0 180 900"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M180,0 L60,0 Q0,450 60,900 L180,900 Z" fill="white" />
              </svg>

              {/* Right content panel */}
              <div className="dh-hero__content">
                <div className="dh-portrait">
                  <div className="dh-portrait__border dh-portrait__border--top" />
                  <img
                    src={potraitImg}
                    alt="Dr. Kaustubh Kale"
                    className="dh-portrait__img"
                  />
                  <div className="dh-portrait__border dh-portrait__border--left" />
                  <div className="dh-portrait__border dh-portrait__border--right" />
                  <div className="dh-portrait__border dh-portrait__border--bottom" />
                </div>

                <div className="dh-specialty">
                  <p className="dh-specialty__sub">Specialist in</p>
                  <h2 className="dh-specialty__title">{slide.title}</h2>
                </div>

                {/* Custom pagination dots rendered here */}
                {/* <div className="dh-custom-pagination" /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}