import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full md:w-72 lg:w-full  shadow hover:shadow-lg transition-all rounded-lg p-4">
      <img src={product?.featureImage} alt="" />
      <div className="divider"></div>
      <br />
      <h1 className="text-2xl"><span className="font-semibold">Name:</span> {product?.name?.slice(0, 20)}</h1>
      <div className="flex justify-between">
        <p className="mt-8 text-[#717171] text-2xl"><span className=" font-semibold text-black">Price : </span>${product?.regularPrice}</p>
        <p className="mt-8 text-2xl  text-black flex items-center gap-1">
          <FaStar />
          {product?.rate}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
