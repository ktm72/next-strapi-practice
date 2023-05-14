import React from "react";
import { useRouter } from "next/router";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
const Catergory = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router);
  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        {" "}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <h2 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {/* {category?.data?.[0]?.attributes?.name}
             */}
            Running
          </h2>
        </div>
        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {/* {data?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))} */}

          <Link href={"/product/1"}>Product</Link>
          <div>Product</div>
          <div>Product</div>
          <div>Product</div>
          <div>Product</div>
          <div>Product</div>
          <div>Product</div>
          <div>Product</div>
          <div>Product</div>
          <div>Product</div>
          <div>Product</div>
          <div>Product</div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Catergory;
