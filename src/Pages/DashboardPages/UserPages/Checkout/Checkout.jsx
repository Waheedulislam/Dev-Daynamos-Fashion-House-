import React, { useContext } from "react";
import { IoCartSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import CheckoutForm from "../../../../Components/Form/CheckoutForm";
import { FaArrowLeft } from "react-icons/fa6";
import CalculatedPrice from "../../../../Components/Shared/Price/CalculatedPrice";
import GrandTotal from "../../../../Components/Shared/Price/GrandTotal";
import { AuthContext } from "../../../../Provider/AuthProvider";
import MenuShoppingCart from "../../../../Components/MenuShoppingCart/MenuShoppingCart";

const Checkout = () => {
  const location = useLocation();
  const isCarsPage = location?.pathname?.includes("carts");
  const isCheckoutPage = location?.pathname?.includes("checkout");
  const { cartProduct ,fetchCartDetails} = useContext(AuthContext);
  const { cart, totalPrice } = cartProduct;

    
  return (
    <div className="container mx-auto px-5">
      {/* Tabs */}
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
          <MdOutlinePayment className="w-6 h-6" />
        </p>
      </div>
      {/* Checkout Form */}
      <div className="lg:flex justify-center gap-5">
        <div className="lg:w-1/2">
          <div className="w-3/4 border p-8 rounded">
            <CheckoutForm />{" "}
          </div>
          <Link
            to="/carts"
            className="flex items-center gap-2 text-blue-500 my-3"
          >
            <FaArrowLeft className="text-sm" />
            Return to Cart
          </Link>
        </div>
        {/* Orders Info */}
        <div className="border p-6 rounded">
          <h1 className="text-base md:text-2xl text-black font-medium">
            Your Order
          </h1>
          {/* Divider */}
          <div className="divider"></div>
          {/* Shopping Carts Item */}
          <MenuShoppingCart />
          {/* Divider */}
          <div className="divider"></div>
          {/* Discount */}
          <div className="join w-full mb-10">
            <input
              className="input input-bordered join-item w-full"
              placeholder="discount code"
            />
            <button className="btn join-item rounded-r-full bg-blue-500 hover:bg-blue-600 text-white">
              Apply code
            </button>
          </div>
          {/* Total Price */}
          <CalculatedPrice />
          <GrandTotal />
          <div className="w-full">
            <Link to="/payment">
              <button className="btn  bg-blue-500 hover:bg-blue-600 border-0 text-white w-full">
                Continue to pay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
