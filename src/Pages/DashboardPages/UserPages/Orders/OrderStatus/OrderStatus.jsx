// import React, { useState, useEffect } from "react";

// const OrderStatus = () => {
//   // Step 1: Set up the state to store order data
//   const [orderData, setOrderData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Step 2: Fetch data when the component mounts
//   useEffect(() => {
//     const fetchOrderData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/orders/1050486'); // Replace with your API URL
//         const data = await response.json();
//         setOrderData(data); // Save data to state
//         setLoading(false);  // Turn off loading state
//       } catch (error) {
//         console.error("Error fetching the order data:", error);
//       }
//     };

//     fetchOrderData();
//   }, []); // The empty array means the effect runs only once, when the component mounts.

//   // Step 3: Show a loading state while the data is being fetched
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // If no order data is found
//   if (!orderData) {
//     return <div>Order data not found</div>;
//   }

//   // Step 4: Render the fetched data
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       {/* Order Status Tracker */}
//       <div className="text-center">
//         <h2 className="text-xl font-semibold mb-4">Order Status</h2>
//         <p className="text-gray-600">Track your order</p>

//         <div className="flex items-center justify-center mt-6">
//           <div className="w-1/4 text-center">
//             <div className="relative">
//               <div className="bg-blue-500 w-10 h-10 mx-auto rounded-full text-white flex items-center justify-center">
//                 <i className="fas fa-check"></i>
//               </div>
//               <p className="text-sm mt-2">Order Placed</p>
//             </div>
//           </div>

//           <div className="w-1/4 text-center">
//             <div className="relative">
//               <div className="bg-blue-500 w-10 h-10 mx-auto rounded-full text-white flex items-center justify-center">
//                 <i className="fas fa-spinner"></i>
//               </div>
//               <p className="text-sm mt-2">Processing</p>
//             </div>
//           </div>

//           <div className="w-1/4 text-center">
//             <div className="relative">
//               <div className="bg-gray-300 w-10 h-10 mx-auto rounded-full text-white flex items-center justify-center">
//                 <i className="fas fa-truck"></i>
//               </div>
//               <p className="text-sm mt-2">On the way</p>
//             </div>
//           </div>

//           <div className="w-1/4 text-center">
//             <div className="relative">
//               <div className="bg-gray-300 w-10 h-10 mx-auto rounded-full text-white flex items-center justify-center">
//                 <i className="fas fa-box"></i>
//               </div>
//               <p className="text-sm mt-2">Delivered</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-gray-200 h-1 w-2/4 mx-auto mt-4">
//           <div className="bg-blue-500 h-1 w-1/2"></div>
//         </div>

//         <p className="mt-4 text-sm text-gray-500">
//           Please wait, we are still processing your order.
//         </p>
//       </div>

//       {/* Order Details */}
//       <div className="mt-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
//           <div>
//             <p className="font-semibold text-gray-600">Order Code</p>
//             <p>{orderData.orderCode}</p>
//           </div>
//           <div>
//             <p className="font-semibold text-gray-600">Placed on</p>
//             <p>{orderData.placedOn}</p>
//           </div>
//           <div>
//             <p className="font-semibold text-gray-600">Sent to</p>
//             <p>{orderData.address}</p>
//           </div>
//           <div>
//             <p className="font-semibold text-gray-600">Payment Type</p>
//             <p>{orderData.paymentType}</p>
//           </div>
//           <div>
//             <p className="font-semibold text-gray-600">Transaction ID</p>
//             <p>{orderData.transactionId}</p>
//           </div>
//           <div>
//             <p className="font-semibold text-gray-600">Amount Paid</p>
//             <p>${orderData.amountPaid}</p>
//           </div>
//         </div>
//       </div>

//       {/* Product List */}
//       <div className="mt-6">
//         <h3 className="font-semibold text-lg mb-4">Order Items</h3>
//         <div className="space-y-4">
//           {orderData.items.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-16 h-16 object-cover"
//               />
//               <div>
//                 <p className="font-semibold">{item.name}</p>
//                 <p>{item.color}</p>
//               </div>
//               <p className="text-right">
//                 ${item.price}{" "}
//                 {item.originalPrice && (
//                   <span className="text-gray-400 line-through">
//                     ${item.originalPrice}
//                   </span>
//                 )}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderStatus;

import React from "react";
import { FaBox, FaCheck, FaTruck } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import image1 from "../../../../../assets/product/image1.png";
import image2 from "../../../../../assets/product/image2.png";

const OrderStatus = () => {
  return (
    <div className="w-full mx-auto p-6">
      {/* Order Status Tracker */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Order Status</h2>
        <p className="text-gray-600">Track your order</p>

        <div className="flex items-center justify-center mt-6">
          <div className="w-1/4 text-center">
            <div className="relative">
              <div className="bg-blue-500 w-10 h-10 mx-auto rounded-full text-white flex items-center justify-center">
                <FaCheck className="fas fa-check"></FaCheck>
              </div>
              <p className="text-sm mt-2">Order Placed</p>
            </div>
          </div>

          <div className="w-1/4 text-center">
            <div className="relative">
              <div className="bg-blue-500 w-10 h-10 mx-auto rounded-full text-white flex items-center justify-center">
                <FaBarsProgress className="fas fa-spinner"></FaBarsProgress>
              </div>
              <p className="text-sm mt-2">Processing</p>
            </div>
          </div>

          <div className="w-1/4 text-center">
            <div className="relative">
              <div className="bg-gray-300 w-10 h-10 mx-auto rounded-full text-white flex items-center justify-center">
                <FaTruck className="fas fa-truck"></FaTruck>
              </div>
              <p className="text-sm mt-2">On the way</p>
            </div>
          </div>

          <div className="w-1/4 text-center">
            <div className="relative">
              <div className="bg-gray-300 w-10 h-10 mx-auto rounded-full text-white flex items-center justify-center">
                <FaBox className="fas fa-box"></FaBox>
              </div>
              <p className="text-sm mt-2">Delivered</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 h-1 w-2/4 mx-auto mt-4">
          <div className="bg-blue-500 h-1 w-1/2"></div>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Please wait, we are still processing your order.
        </p>
      </div>

      {/* Order Details */}
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-gray-600">Order Code</p>
            <p>#1050486</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Placed on</p>
            <p>2023/04/15</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Sent to</p>
            <p>31, Albuquerque, New York</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Payment Type</p>
            <p>Net Banking</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Transaction ID</p>
            <p>2345678910</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Amount Paid</p>
            <p>$543.02</p>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-4">Order Items</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <img
              src={image1}
              alt="MacBook Pro"
              className="w-16 h-16 object-cover"
            />
            <div>
              <p className="font-semibold">
                MacBook Pro X2 MNEJ3 2022 13.3 inch
              </p>
              <p>Black</p>
            </div>
            <p className="text-right">
              $433.20{" "}
              <span className="text-gray-400 line-through">$1299.00</span>
            </p>
          </div>

          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <img
              src={image2}
              alt="Laptop Case"
              className="w-16 h-16 object-cover"
            />
            <div>
              <p className="font-semibold">
                Inateck 13-13.3 Inch Laptop Case Sleeve 360°
              </p>
              <p>Blue</p>
            </div>
            <p className="text-right">$63.26</p>
          </div>

          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <img
              src={image1}
              alt="Privacy Screen"
              className="w-16 h-16 object-cover"
            />
            <div>
              <p className="font-semibold">
                Laptop Privacy Screen 13 inch MacBook Pro & Air
              </p>
              <p>Black</p>
            </div>
            <p className="text-right">$23.26</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
