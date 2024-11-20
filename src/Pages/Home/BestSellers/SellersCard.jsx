import React from "react";
import ProductCard from "../../../Components/Shared/Cards/ProductCard";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { fadeIn } from '../../../variants'
import { motion } from 'framer-motion'

const SellersCard = () => {
  const axiosPublic = useAxiosPublic()

  // Get all products
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const result = await axiosPublic.get('/products/all')
      return result.data
    }
  })
  // Placeholder skeleton loader
  const skeletonArray = Array.from({ length: 4 });
  return (
    isLoading ?
      (
        <div className="flex gap-4 overflow-x-auto">
          {skeletonArray.map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 w-full h-full m-2 bg-gray-300 rounded-lg animate-pulse p-4 shadow-sm "
            >
              <div className="h-[150px] bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-[70%]"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-[80%]"></div>
            </div>
          ))}
        </div>
      ) :
      (
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-6">
          {products?.slice(0, 4)?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </motion.div>
      )
  );
};

export default SellersCard;