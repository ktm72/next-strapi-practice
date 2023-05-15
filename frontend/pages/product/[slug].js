import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

import Wrapper from "@/components/Wrapper";
import ProductCarousel from "@/components/ProductCarousel";
import RelatedProducts from "@/components/RelatedProducts";

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
              <p className="mr-2 text-lg font-semibold">MRP : $345</p>
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
            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {/* {p.size.data.map((item, i) => ( */}
                <div
                  // key={i}
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                  // ${ item.enabled ?

                  //     : "cursor-not-allowed bg-black/[0.1] opacity-50"
                  // } ${selectedSize === item.size ?

                  // : ""}`}
                  // onClick={() => {
                  //   setSelectedSize(item.size);
                  //   setShowError(false);
                  // }}
                >
                  M{/* {item.size} */}
                </div>
                {/* ))} */}
                <div
                  // key={i}
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  L
                </div>
                <div
                  // key={i}
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  XL
                </div>
                <div
                  // key={i}
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  XXL
                </div>
                <div
                  // key={i}
                  className={`border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50`}
                >
                  XXXL
                </div>
                {/* SHOW ERROR START */}
              </div>
              {/* {showError && ( */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* )} */}
              <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                // onClick={() => {
                //   if (!selectedSize) {
                //     setShowError(true);
                //     document.getElementById("sizesGrid").scrollIntoView({
                //       block: "center",
                //       behavior: "smooth",
                //     });
                //   } else {
                //     dispatch(
                //       addToCart({
                //         ...product?.data?.[0],
                //         selectedSize,
                //         oneQuantityPrice: p.price,
                //       })
                //     );
                //     notify();
                //   }
                // }}
              >
                Add to Cart
              </button>
              {/* ADD TO CART BUTTON END */}

              {/* WHISHLIST BUTTON START */}
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button>

              <div>
                <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="markdown text-md mb-5">
                  {/* <ReactMarkdown>{p.description}</ReactMarkdown> */}
                  Feel unbeatable from the tee box to the final putt in a design
                  ithat's pure early MJ: speed, class and laden with true early
                  '90s touches like visible Air and a translucent rubber sole
                  that continue to stand the test of time. This model fuses the
                  strpt of 1st MJ's championship with some of our best golf
                  technology, helping you make a statement of confidence when it
                  comes time to tame the course.
                </div>
                <div className="markdown text-md mb-5">
                  Feel unbeatable from the tee box to the final putt in a design
                  ithat's pure early MJ: speed, class and laden with true early
                  '90s touches like visible Air and a translucent rubber sole
                  that continue to stand the test of time. This model fuses the
                  strpt of 1st MJ's championship with some of our best golf
                  technology, helping you make a statement of confidence when it
                  comes time to tame the course.
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
