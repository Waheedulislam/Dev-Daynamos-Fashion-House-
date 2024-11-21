import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";

const ProductOnSellSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Fetching products
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const result = await axiosPublic.get("/products/all");
      return result.data;
    },
  });

  // Placeholder skeleton loader
  const skeletonArray = Array.from({ length: 5 });

  return (
    <div className="relative w-full">
      {/* Skeleton loaders */}
      {isLoading ? (
        <div className="flex gap-4 overflow-x-auto">
          {skeletonArray.map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 lg:w-[184px] mr-2 bg-gray-100 rounded-lg animate-pulse p-4 shadow-sm"
            >
              <div className="h-[150px] bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-[70%]"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-[80%]"></div>
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products.map((pd) => (
            <SwiperSlide key={pd._id}>
              <div className="flex justify-center lg:mt-1 mt-4">
                <div className="rounded-lg hover:transition lg:h-[237px] hover:ease-in hover:duration-300 lg:max-w-[184px] bg-white overflow-hidden relative p-2  w-80 h-80 ">
                  {/* Discount Badge */}
                  {pd?.sellPrice && (
                    <div className="absolute top-2 left-2 rounded bg-red-100 px-2 py-1">
                      <p className="text-xs text-red-600 font-bold">
                        {pd?.regularPrice > 0 &&
                          Math.round(
                            ((pd?.regularPrice - pd?.sellPrice) /
                              pd?.regularPrice) *
                            100
                          ) + "% OFF"}
                      </p>
                    </div>
                  )}
                  {/* Product Image */}
                  <img
                    src={pd.featureImage}
                    alt={pd.name || "Product"}
                    className="w-full lg:h-[150px] h-60  object-cover rounded"
                  />
                  {/* Product Name */}
                  <h4 className="text-sm text-gray-800 mt-2 truncate font-medium">
                    {pd.name}
                  </h4>
                  {/* Price */}
                  <div className="flex justify-between items-center mt-3">
                    {pd?.regularPrice && (
                      <p className="text-xs text-gray-400 line-through">
                        ${parseFloat(pd.regularPrice).toFixed(2)}
                      </p>
                    )}
                    <p className="text-sm text-green-600 font-semibold">
                      ${parseFloat(pd.sellPrice || pd.regularPrice).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Custom Navigation Buttons */}
      <div className="absolute -bottom-12 lg:-bottom-14 right-4 z-10 flex items-center gap-3">
        <button
          ref={prevRef}
          className="bg-gray-100 hover:bg-gray-200 shadow p-3 rounded-full cursor-pointer"
          aria-label="Previous Slide"
        >
          <IoIosArrowBack size={20} />
        </button>
        <button
          ref={nextRef}
          className="bg-gray-100 hover:bg-gray-200 shadow p-3 rounded-full cursor-pointer"
          aria-label="Next Slide"
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductOnSellSlider;
