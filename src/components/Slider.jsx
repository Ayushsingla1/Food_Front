import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Project from "./Project";
import {GoTriangleRight,GoTriangleLeft} from "react-icons/go";

const CenterMode =  () => {
  const images = ["https://res.cloudinary.com/dmnjig3al/image/upload/v1716919056/Devcomm/q6vusuygigwd1e6xx4nm.jpg",
  "https://res.cloudinary.com/dmnjig3al/image/upload/v1716919035/Devcomm/luu8us3ilbpprdaxfny1.jpg",
  "https://res.cloudinary.com/dmnjig3al/image/upload/v1716921121/Devcomm/y9l8mlrb9acmpmda6fkt.jpg",
  "https://res.cloudinary.com/dmnjig3al/image/upload/v1716920512/Devcomm/w1qvqqogc9bo3fsplqhy.jpg",
  "https://res.cloudinary.com/dmnjig3al/image/upload/v1716920902/Devcomm/gf9utl8zbh9ptkezxxzm.jpg"
  ]

  const ArrowRef = useRef(null);
    var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows : false,
        autoplay : true,
        autoplaySpeed:2500,
        slickPlay : true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
      <div className="relative w-full overflow-x-hidden">
        <Slider ref={ArrowRef} {...settings} className="mt-28 w-[100vw]">
          {images.map((image,index) =>{
            return (
              <Project image={image} key={index}/>
            )
          })}
      </Slider>
      <div>
        <button onClick={()=>ArrowRef.current.slickNext()} className="w-12 h-12 border-none hover:cursor-pointer bg-[#0000003f] absolute top-1/2 left-0"><GoTriangleLeft className="w-12 h-12 fill-white"></GoTriangleLeft></button>
        <button onClick={()=>ArrowRef.current.slickPrev()} className="w-12 h-12 border-none hover:cursor-pointer bg-[#0000003f] absolute top-1/2 right-0"><GoTriangleRight className="w-12 h-12 fill-white"></GoTriangleRight></button>
      </div>
      </div>
  )
}

export default CenterMode;