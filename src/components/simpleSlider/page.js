import React from "react";
import Slider from "react-slick";
import bannerOne from '../../image/slider/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png'
import bannerTwo from '../../image/slider/offer-3-2f8285b13bef950f843cb4147666af6e.png'
import bannerThree from '../../image/slider/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png'
import Image from "next/image";
import pickBazar from "@/image/logo/logo.svg";
export default function SimpleSlider() {

    const pageslider = React.createRef();

    const next = () => {
        pageslider.current.slickNext();
    };
    const previous = () => {
        pageslider.current.slickPrev();
    };

    var settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerPadding: 30,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="item px-sm-2">
                    <Image src={bannerOne} alt="fd" className="img-fluid" min-width={150}/>
                </div>
                <div className="item px-sm-2">
                    <Image src={bannerTwo} alt="fd" className="img-fluid" min-width={150}/>
                </div>
                <div className="item px-sm-2">
                    <Image src={bannerThree} alt="fd" className="img-fluid" min-width={150}/>
                </div>
                <div className="item px-sm-2">
                    <Image src={bannerOne} alt="fd" className="img-fluid" min-width={150}/>
                </div>
                <div className="item px-sm-2">
                    <Image src={bannerTwo} alt="fd" className="img-fluid" min-width={150}/>
                </div>
                <div className="item px-sm-2">
                    <Image src={bannerThree} alt="fd" className="img-fluid" min-width={150}/>
                </div>
            </Slider>
        </div>
    );
}
