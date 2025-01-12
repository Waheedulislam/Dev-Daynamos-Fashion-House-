import React from "react";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import NewProductCard from "../../../Components/Shared/Cards/NewProductCard";

import { fadeIn } from '../../../variants'
import { motion } from 'framer-motion'
import axios from "axios";

const ProductCards = () => {
  // const axiosPublic = useAxiosPublic();

  // Get all products
  // const { data: products = [], refetch, isLoading } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: async () => {
  //     // const result = await axiosPublic.get('/products/all');
  //     const result = await axios.get('../../../../public/products.json');
  //     return result.data;
  //   }
  // });
  const { data: productsData = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      return products; // Return the fake products directly
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

const products = [
  {
    "_id": "66f803692cba3d5ba0e1fe29",
    "name": "Apple MacBook Air 13.3-Inch Retina Display 8-core Apple M1 chip with 8…",
    "rate": "5",
    "regularPrice": "862.26",
    "sellPrice": "753.43",
    "brand": "Apple",
    "modelName": "MacBook Air 13\" M1 Chip",
    "screenSize": "13.3 x 8.6 inches",
    "driveSize": "256GB",
    "ram": "8GB",
    "processor": "Apple M1",
    "color": "White",
    "gpuBrand": "Apple M1 GPU",
    "category": "Laptop",
    "stock": true,
    "WarrantyDetails": "01 year International Limited Warranty (Terms & Condition Apply As Per…",
    "Speaker": "Stereo speakers",
    "BatteryCapacity": "49.9‑watt‑hour",
    "WebCam": "HD",
    "KeyboardType": "Backlit Magic Keyboard",
    "featureImage": "https://i.ibb.co.com/VYM9N8C/macbook-air-13-3-inch-500x500.webp",
    "galleryImages": []
  },
  {
    "_id": "66f810f18e4cd8629c562933",
    "name": "Apple MacBook Pro 14 inch M3 Chip Liquid Retina Display 8GB RAM 512GB …",
    "rate": "5",
    "regularPrice": "1798.44",
    "sellPrice": "1657",
    "brand": "Apple",
    "modelName": "MacBook Pro M3",
    "screenSize": "14.0 x 9.0 inches",
    "driveSize": "512GB",
    "ram": "8GB",
    "processor": "Apple M2",
    "color": "Gray",
    "gpuBrand": "Apple M1 Pro GPU",
    "category": "Laptop",
    "stock": true,
    "KeyboardType": "Backlit Magic Keyboard",
    "WebCam": "HD",
    "BatteryCapacity": "70Wh",
    "Speaker": "six-speaker",
    "WarrantyDetails": "1 Year international warranty Estimated Warranty Claim Duration in 40 …",
    "featureImage": "https://i.ibb.co.com/16NxxyP/macbook-pro-m3-space-gray-01-500x500.webp",
    "galleryImages": []
  },
  {
    "_id": "66f812528e4cd8629c562934",
    "name": "Lenovo IdeaPad Slim 3 15AMN8 Ryzen 5 7520U 15.6\" FHD TN Laptop",
    "rate": "4.5",
    "regularPrice": "598.56",
    "sellPrice": "560",
    "brand": "Lenovo",
    "modelName": "IdeaPad Slim 3 15AMN8",
    "screenSize": "15.6 x 10.0 inches",
    "driveSize": "512GB",
    "ram": "16GB",
    "processor": "AMD Ryzen 5",
    "color": "Gray",
    "gpuBrand": "AMD Radeon Pro 5500M",
    "KeyboardType": "Backlit",
    "category": "Laptop",
    "stock": true,
    "TouchPad": "",
    "WebCam": "HD",
    "Speaker": "1.5W ",
    "BatteryCapacity": "47Wh",
    "WarrantyDetails": "2 years International Limited Warranty (Battery 1 year).",
    "featureImage": "https://i.ibb.co.com/NWVXKmy/ideapad-slim-3-15amn8-abyss-blue-04-500x500.webp",
    "galleryImages": []
  },
  {
    "_id": "66f815308e4cd8629c562935",
    "name": "Asus P1511CMA Intel Celeron N4020 15.6-Inch HD Laptop",
    "rate": "3.5",
    "regularPrice": "330.59",
    "sellPrice": "",
    "brand": "ASUS",
    "modelName": "P1511CMA",
    "screenSize": "15.6 x 10.0 inches",
    "driveSize": "1TB",
    "ram": "4GB",
    "processor": "Intel Core i3",
    "color": "Purple",
    "gpuBrand": "Intel Iris Xe Graphics",
    "category": "Laptop",
    "stock": true,
    "KeyboardType": "Chiclet Keyboard",
    "WebCam": "VGA ",
    "BatteryCapacity": "37WHrs",
    "Speaker": "Sonic Master ",
    "WarrantyDetails": "2 years International Limited Warranty (Battery 1 year).",
    "featureImage": "https://i.ibb.co.com/Wcz4Xsq/p1511cma-slate-grey-01-500x500.webp",
    "galleryImages": []
  },
  {
    "_id": "67065609fcfdfbd986e3c0d3",
    "name": "Galaxy S22 5G",
    "rate": "3.5",
    "regularPrice": "501.71",
    "sellPrice": "376.28",
    "brand": "Apple",
    "modelName": "Galaxy S22 5G",
    "screenSize": "6.7 x 3.1 inches",
    "driveSize": "256GB",
    "ram": "8GB",
    "processor": "Qualcomm Snapdragon 750G",
    "color": "Silver",
    "category": "Laptop",
    "WarrantyDetails": "",
    "featureImage": "https://i.ibb.co.com/mSqTpSy/Galaxy-S22-5-G-Graphite-4162.jpg",
    "galleryImages": []
  },
  {
    "_id": "66f816008e4cd8629c562936",
    "name": "Asus ExpertBook BR1100FKA Celeron N4500 11.6\" 360° HD LED Touch Educational Laptop",
    "rate": "3.5",
    "regularPrice": "390.61",
    "sellPrice": "",
    "brand": "ASUS",
    "modelName": "ExpertBook BR1100FKA",
    "screenSize": "11.6 x 7.9 inches",
    "driveSize": "256GB",
    "ram": "4GB",
    "processor": "Intel Core i3",
    "color": "Gray",
    "gpuBrand": "Intel Iris Xe Graphics",
    "KeyboardType": "Chiclet Keyboard",
    "category": "Laptop",
    "stock": true,
    "TouchPad": "",
    "WebCam": "HD",
    "Speaker": "Sonic Master ",
    "BatteryCapacity": "37WHrs",
    "WarrantyDetails": "03 years International Limited Warranty (Battery 1 year)",
    "featureImage": "https://i.ibb.co.com/BB62jfp/expertbook-br1100fka-05-500x500.webp",
    "galleryImages": []
  },
  {
    "_id": "66fd94f4c255d22fa2d469d5",
    "name": "Apple iPhone 16 Pro Max",
    "rate": "4.5",
    "regularPrice": "1548.97",
    "sellPrice": "",
    "brand": "Apple",
    "modelName": "16 Pro Max",
    "screenSize": "6.7 x 3.1 inches",
    "driveSize": "256GB",
    "ram": "8GB",
    "processor": "Apple A11 Bionic",
    "color": "Gray",
    "gpuBrand": "Apple GPU (A13 Bionic)",
    "category": "Mobile",
    "stock": true,
    "BatteryCapacity": "4685 mAh",
    "Speaker": "Yes",
    "WarrantyDetails": "1 year Limited Warranty (1 year for Battery and Adapter, Terms & condi…",
    "featureImage": "https://i.ibb.co/KKV7y07/Apple-i-Phone-16-Pro-Max-Desert-Titanium-1.webp",
    "galleryImages": []
  },
  {
    "_id": "66fffbfdab39257af91adb63",
    "name": "iPhone 15",
    "rate": "5",
    "regularPrice": "1239.14",
    "sellPrice": "1214.03",
    "brand": "Apple",
    "modelName": "iPhone 15",
    "screenSize": "6.3 x 3.0 inches",
    "driveSize": "512GB",
    "ram": "8GB",
    "processor": "Apple A14 Bionic",
    "color": "Yellow",
    "gpuBrand": "Apple GPU (A14 Bionic)",
    "category": "Mobile",
    "stock": true,
    "BatteryCapacity": "Li-Ion 3349 mAh",
    "Speaker": "Yes",
    "WarrantyDetails": "1 Year Warranty. Estimated Warranty Claim Duration in 40 Days (Approx)…",
    "featureImage": "https://i.ibb.co.com/QDzX51r/i-Phone-15-Plus-4-7443.jpg",
    "galleryImages": []
  },
  {
    "_id": "6706553efcfdfbd986e3c0d2",
    "name": "Galaxy S23 Ultra 5G",
    "rate": "5",
    "regularPrice": "1337.90",
    "sellPrice": "769",
    "brand": "Samsung",
    "modelName": "Galaxy S23 Ultra 5G",
    "screenSize": "6.7 x 3.1 inches",
    "driveSize": "1TB",
    "ram": "12GB",
    "processor": "Qualcomm Snapdragon 855",
    "color": "Rose Gold",
    "gpuBrand": "Qualcomm Adreno 660",
    "category": "Mobile",
    "stock": true,
    "BatteryCapacity": "5000 mAh ",
    "Speaker": "Yes",
    "WarrantyDetails": "1 Year Warranty. Estimated Warranty Claim Duration in 40 Days (Approx)…",
    "featureImage": "https://i.ibb.co.com/7bkDvrM/Galaxy-S23-Ultra-Red-5487.jpg",
    "galleryImages": []
  },
  {
    "_id": "67065609fcfdfbd986e3c0d3",
    "name": "Galaxy S22 5G",
    "rate": "3.5",
    "regularPrice": "501.71",
    "sellPrice": "376.28",
    "brand": "Apple",
    "modelName": "Galaxy S22 5G",
    "screenSize": "6.7 x 3.1 inches",
    "driveSize": "256GB",
    "ram": "8GB",
    "processor": "Qualcomm Snapdragon 750G",
    "color": "Silver",
    "gpuBrand": "Qualcomm Adreno 640",
    "category": "Mobile",
    "stock": true,
    "TouchPad": "",
    "WebCam": "",
    "Speaker": "Yes",
    "BatteryCapacity": "Li-Ion 3700mAh ",
    "WarrantyDetails": "2 years International Limited Warranty (Battery 1 year).",
    "featureImage": "https://i.ibb.co.com/mSqTpSy/Galaxy-S22-5-G-Graphite-4162.jpg",
    "galleryImages": []
  },
  {
    "_id": "6706981aa3ca9734992a44ed",
    "name": "Olevs 9991 For Men – Silver Black",
    "rate": "3.5",
    "regularPrice": "26.78",
    "sellPrice": "17.99",
    "brand": "Acer",
    "modelName": "Olevs 9991",
    "screenSize": "38 x 38 mm",
    "driveSize": "",
    "ram": "4GB",
    "processor": "",
    "color": "Silver",
    "gpuBrand": "",
    "category": "Watch",
    "stock": true,
    "BatteryCapacity": "70Wh",
    "Speaker": "no",
    "WarrantyDetails": "01 year International Limited Warranty (Terms & Condition Apply As Per…",
    "featureImage": "https://i.ibb.co/Rj1FXsr/OLEVS-9991-Chronograph-Quartz-Watch-white-wpp1717448787776-600x600.png",
    "galleryImages": []
  }
]