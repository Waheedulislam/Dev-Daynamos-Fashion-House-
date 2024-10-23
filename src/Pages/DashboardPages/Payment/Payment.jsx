import React, { useState, useContext, useEffect } from "react";
import { IoCartSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import MenuShoppingCart from "../../../Components/MenuShoppingCart/MenuShoppingCart";
import CalculatedPrice from "../../../Components/Shared/Price/CalculatedPrice";
import GrandTotal from "../../../Components/Shared/Price/GrandTotal";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic/useAxiosPublic";
import { ImageDisplayControl } from "@frameright/react-image-display-control";
import paymentImg from "../../../assets/payment/SSLCommerz-Pay.png";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../Components/Shared/LoadingSpiner/LoadingSpinner";
import { ShippingAddressContext } from "../../../Provider/ShippingAddressProvider";
import { use } from "framer-motion/client";

const Payment = () => {
  const location = useLocation();
  const isCarsPage = location?.pathname?.includes("carts");
  const isCheckoutPage = location?.pathname?.includes("checkout");
  const isPaymentPage = location?.pathname?.includes("payment");
  const axiosPublic = useAxiosPublic();
  const { cartProduct, fetchCartDetails, user, loading } = useContext(AuthContext);
  const { cart, totalPrice } = cartProduct;
  const userEmail = user?.email;
  const { shippingAddress } = useContext(ShippingAddressContext);

  useEffect(() => {
    console.log('Shipping Address on Payment Page:', shippingAddress);
  }, [shippingAddress]);
  // Monitor if userEmail changes and log for debugging
  useEffect(() => {
    if (user?.email) {
      console.log("User Email is now available:", user.email);
    }
  }, [user?.email]);

  // Function to clear the cart after payment
  const clearCart = async (userEmail) => {
    if (!userEmail) {
      toast.error("User email is missing. Cannot clear the cart.");
      return;
    }

    try {
      const response = await axiosPublic.post(`/api/cart/clear/${userEmail}`);
      console.log(response.data.message); // Log response
      if (response.data.message === "Cart cleared successfully") {
        fetchCartDetails();
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  }

  // Function to handle payment creation
  const handleCreatePayment = async () => {
    // Ensure userEmail is available before proceeding
    if (!userEmail) {
      toast.error("User email is not available. Please try again.");
      return;
    }

    // Basic validation checks for cart and total price
    if (!cart || cart.length === 0) {
      toast.error("Your cart is empty. Please add items to the cart before proceeding.");
      return;
    }

    if (!totalPrice || isNaN(totalPrice) || totalPrice <= 0) {
      toast.error("Invalid total price. Please check your cart.");
      return;
    }

    // Proceed with payment creation
    try {
      const response = await axiosPublic.post("/create-payment", {
        cart,
        totalPrice: parseFloat(totalPrice),
        userName: user.displayName,
        userEmail,
        shippingAddress  // Ensure userEmail is passed correctly
      });

      console.log('payment page: 87' ,response.data);

      const redirectUrl = response.data.paymentUrl;
      if (redirectUrl) {
        window.location.replace(redirectUrl);  // Redirect to payment gateway
      }
    } catch (error) {
      console.error("Error creating payment:", error);
      toast.error("There was an error processing your payment. Please try again.");
    }
  };

  // Display a loading spinner if user data or cart is not ready
  if (loading || !userEmail) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-5">
      {/* Tabs for navigation */}
      <div className="flex justify-center items-center gap-5 my-12">
        <p>
          <IoCartSharp
            className={`w-8 p-1 h-8 text-xl border rounded-full ${
              isCarsPage ? "text-blue-600" : "text-[#9E9E9E]"
            }`}
          />
        </p>
        <div className="divider w-14 divider-neutral"></div>
        <p>
          <TbTruckDelivery
            className={`w-8 p-1 h-8 text-xl border rounded-full ${
              isCheckoutPage ? "text-blue-600" : "text-[#9E9E9E]"
            }`}
          />
        </p>
        <div className="divider w-14 divider-neutral"></div>
        <p>
          <MdOutlinePayment
            className={`w-8 p-1 h-8 text-xl border rounded-full ${
              isPaymentPage ? "text-blue-600" : "text-[#9E9E9E]"
            }`}
          />
        </p>
      </div>

      {/* Payment and Order Info */}
      <div className="lg:flex justify-center gap-5">
        <div className="lg:w-1/2">
          <div className="w-3/4">
            <ImageDisplayControl>
              <img src={paymentImg} className="lg:w-[500px]" alt="Payment Options" />
            </ImageDisplayControl>
          </div>
          <Link to="/checkout" className="flex items-center gap-2 text-blue-500 my-3">
            <FaArrowLeft className="text-sm" />
            Return to Checkout
          </Link>
        </div>
        {/* Order Details */}
        <div className="border p-6 rounded">
          <h1 className="text-base md:text-2xl text-black font-medium">Your Order</h1>
          <div className="divider"></div>
          <MenuShoppingCart />
          <div className="divider"></div>

          {/* Discount Section */}
          <div className="join w-full mb-10">
            <input className="input input-bordered join-item w-full" placeholder="discount code" />
            <button className="btn join-item rounded-r-full bg-blue-500 hover:bg-blue-600 text-white">
              Apply code
            </button>
          </div>

          {/* Total Price Section */}
          <CalculatedPrice />
          <GrandTotal />

          {/* Payment Button */}
          <div className="w-full">
            <button
              onClick={handleCreatePayment}
              className="btn bg-blue-500 hover:bg-blue-600 border-0 text-white w-full"
            >
              Continue to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
