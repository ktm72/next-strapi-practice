import Image from "next/image";
import Link from "next/link";
import React from "react";
//{ data: { attributes: p, id } }
const ProductCard = ({ img }) => {
  return (
    <Link
      href={`/product/1`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer relative"
    >
      <Image
        width={300}
        height={250}
        // src={p.thumbnail.data.attributes.url}
        src={img}
        alt={"product"}
        className="object-cover transition duration-500"
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">
          {/* {p.name} */}
          Product Name
        </h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">
            $230
            {/* {p.price} */}
          </p>

          {/* {p.original_price && ( */}
          <>
            <p className="text-base  font-medium line-through">
              {/* &#8377;{p.original_price} */}
              $250
            </p>
            <p className="ml-auto text-base font-medium text-green-500">
              {/* {getDiscountedPricePercentage(p.original_price, p.price)} */}
              20% off
            </p>
          </>
          {/* )} */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
