import React from "react";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import NewProductCard from "../../../Components/Shared/Cards/NewProductCard";

import { fadeIn } from '../../../variants'
import { motion } from 'framer-motion'
import axios from "axios";

const ProductCards = () => {
  const axiosPublic = useAxiosPublic();

  // Get all products
  const { data: products = [], refetch, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // const result = await axiosPublic.get('/products/all');
      const result = await axios.get('../../../../public/products.json');
      return result.data;
    }
  });


  // Placeholder skeleton loader
  const skeletonArray = Array.from({ length: 4 });
  return (
    isLoading ? (
      <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2 mx-4">
        {skeletonArray.map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 w-full h-full m-2  rounded-lg animate-pulse p-4 shadow-md "
          >
            <div className="h-[150px] bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300  rounded w-[70%]"></div>
            <div className="h-4 bg-gray-300  rounded w-full"></div>
            <div className="h-4 bg-gray-300  rounded w-[80%]"></div>
          </div>
        ))}
      </div>
    ) :
      (
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6">
          {products.slice(0, 4).reverse().map((product) => (
            <NewProductCard key={product._id} product={product} />
          ))}
        </motion.div>

      )
  );
};

export default ProductCards;
