import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

import Wrapper from "@/components/Wrapper";
import ProductCarousel from "@/components/ProductCarousel";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductCarousel />
          </div>
          <div className="py-3 flex-[1]">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Jump
            </div>
            <div className="text-lg font-semibold mb-5">fits</div>
            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">MRP : &#8377;345</p>
              {/* {p.original_price && (
            <>
              <p className="text-base  font-medium line-through">
                &#8377;{p.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(p.original_price, p.price)}% off
              </p>
            </>
          )} */}
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
