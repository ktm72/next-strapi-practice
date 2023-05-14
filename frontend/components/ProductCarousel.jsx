import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
const ProductCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={true}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/p1.png" width={100} height={100} alt="" />
        <img src="/p2.png" width={100} height={100} alt="" />
        <img src="/p3.png" width={100} height={100} alt="" />
        <img src="/p4.png" width={100} height={100} alt="" />
        <img src="/p5.png" width={100} height={100} alt="" />
        <img src="/p6.png" width={100} height={100} alt="" />
        <img src="/p7.png" width={100} height={100} alt="" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
