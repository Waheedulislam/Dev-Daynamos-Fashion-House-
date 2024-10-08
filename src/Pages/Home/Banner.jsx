import React from "react";
import { ImageDisplayControl } from "@frameright/react-image-display-control";
import bannerImg from "../../assets/images/banner/banner.png";
import PrimaryBtn from "../../Components/Shared/Buttons/PrimaryBtn";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-6 lg:mt-0 h-auto lg:h-[544px]">
        {/* Content */}
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="font-bold text-6xl my-10 text-[#042352] ">
            Tech Heim
          </h1>
          <p className="text-black text-xs md:text-lg lg:text-[32px] font-medium mb-6 md:mb-20 lg:mb-[110px]">
            "Join the{" "}
            <span className="text-[#F45E0C]">digital revolution</span>"
          </p>
          <Link to="/shop">
            <PrimaryBtn
              width="w-72"
              height="h-12 lg:h-14"
              color="text-white"
              size="text-xs md:text-xl lg:text-2xl"
            >
              Explore More
            </PrimaryBtn>
          </Link>
        </div>
        {/* Image */}
        <div className="w-full lg:w-auto">
          <img src={bannerImg} className="w-full h-auto max-w-lg mx-auto lg:mx-0" alt="Banner" />

        </div>
      </div>
    </section>
  );
};

export default Banner;
