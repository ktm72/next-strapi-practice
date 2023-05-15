import React, { useRef } from "react";
import ProductCard from "./ProductCard";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// { products }

const RelatedProducts = () => {
  // const scrollRef = useRef(null);
  // const scroll = (direction) => {
  //   const { current } = scrollRef;
  //   if (direction === "left") {
  //     current.scrollLeft -= 300;
  //   } else {
  //     current.scrollLeft += 300;
  //   }
  // };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        <ProductCard img={"/p1.png"} />
        <ProductCard img={"/p2.png"} />
        <ProductCard img={"/p3.png"} />
        <ProductCard img={"/p4.png"} />
        <ProductCard img={"/p5.png"} />
        <ProductCard img={"/p1.png"} />
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
