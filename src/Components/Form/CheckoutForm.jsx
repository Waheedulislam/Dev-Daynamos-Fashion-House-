import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import CheckoutFormModal from "../Shared/Modals/CheckoutFormModal";
import { ShippingAddressContext } from "../../Provider/ShippingAddressProvider";


const CheckoutForm = ({handleShippingFrom}) => {
  const { user } = useContext(AuthContext);
  const { shippingAddress, updateShippingAddress } = useContext(ShippingAddressContext);

  useEffect(() => {
    console.log('Shipping Address on Checkout Page:', shippingAddress);
  }, [shippingAddress]);

  const handleShippingAddressChange = (e) => {
    const newAddress = e.target.value;
    updateShippingAddress(newAddress);
  };
  // console.log(inputAddress)
  return (
    <form>
      <div className="form-control mb-8">
        <label className="label">
          <span className="label-text text-xl font-medium text-black">
            User
          </span>
        </label>
        <input
          type="text"
          placeholder="name"
          defaultValue={user?.displayName}
          className="input input-bordered bg-[#F6F6F6] focus:border-0"
          required
        />
      </div>
      <div className="form-control mb-8">
        <label className="label">
          <span className="label-text text-xl font-medium text-black">
            Ship to{" "}
          </span>
        </label>
        <div className=" text-sm relative flex flex-row items-center">
          <input
            className="flex bg-[#F6F6F6] w-full rounded-md  input input-bordered focus:border-0"
            placeholder="HubSpot, 25 First Street, Cambridge MA 02141, United States"
            name="shipTo"
            type="text"
            value={shippingAddress}
            onChange={handleShippingAddressChange}
            required
          />
          <span
            onClick={""}
            className="absolute right-2 cursor-pointer text-blue-500"
          >
            <CheckoutFormModal />
          </span>
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-xl font-medium text-black">
            Shiping Method
          </span>
        </label>
        {/* Radio 1 */}
        <div className="flex flex-col mb-2">
          <div className="flex gap-2 border rounded p-2 bg-[#F6F6F6]">
            <input
              type="radio"
              name="radio-1"
              className="radio radio-primary"
            />
            <div className="w-full">
              <p>Free Shopping</p>
              {/* Business Day & Price */}
              <div className="flex justify-between ">
                <p className="text-[#505050]">7-30 Business Days</p>
                <p className="text-[#505050]">$0</p>
              </div>
            </div>
          </div>
        </div>
        {/* Radio 2 */}
        <div className="flex flex-col mb-2">
          <div className="flex gap-2 border rounded p-2 bg-[#F6F6F6]">
            <input
              type="radio"
              name="radio-1"
              className="radio radio-primary"
            />
            <div className="w-full">
              <p>Regular Shipping</p>
              {/* Business Day & Price */}
              <div className="flex justify-between ">
                <p className="text-[#505050]">3-14 business days</p>
                <p className="text-[#505050]">$7.50</p>
              </div>
            </div>
          </div>
        </div>
        {/* Radio 3 */}
        <div className="flex flex-col mb-2">
          <div className="flex gap-2 border rounded p-2 bg-[#F6F6F6]">
            <input
              type="radio"
              name="radio-1"
              className="radio radio-primary"
              defaultChecked
            />
            <div className="w-full">
              <p>Express Shipping</p>
              {/* Business Day & Price */}
              <div className="flex justify-between ">
                <p className="text-[#505050]">1-3 business days</p>
                <p className="text-[#505050]">$22.50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
