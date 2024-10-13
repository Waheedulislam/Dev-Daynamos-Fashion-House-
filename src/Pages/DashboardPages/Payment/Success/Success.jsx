import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../Components/Hooks/useAxiosPublic/useAxiosPublic";
import { TiTick } from "react-icons/ti";
import useAuth from "../../../../Components/Hooks/useAuth/useAuth";
import { v4 as uuidv4 } from "uuid";
import LoadingSpinner from "../../../../Components/Shared/LoadingSpiner/LoadingSpinner";

const Success = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const tran_id = uuidv4();

  const userEmail = user?.email;
  console.log(userEmail);

  // Ensure that all hooks are called before any conditional returns
  useEffect(() => {
    const handlePaymentSuccess = async () => {
      try {
        const response = await axiosPublic.post("/payment-success", {
          tran_id,
          userEmail,
          card_type: "mastercard,visacard,amexcard",
        });
        console.log("Payment success process complete", response.data);
        navigate("/success");
      } catch (error) {
        console.error("Error processing payment success", error);
      }
    };

    handlePaymentSuccess();
  }, [axiosPublic, navigate, tran_id, userEmail]);

  
  //////////////////////////// Latest Payment Start /////////////////////

  const [latestPayment, setLatestPayment] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loading && userEmail) {
      axiosPublic
        .get(`/get-latest-payment?email=${userEmail}`)
        .then((response) => {
          console.log(response.data);
          setLatestPayment(response.data);
        })
        .catch((error) => {
          console.error("Error fetching latest payment:", error);
          setError("Failed to load payment information");
        });
    }
  }, [user, loading, axiosPublic]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col md:w-[442px] md:h-[600px] border p-6 rounded text-center shadow">
          <h1 className=" text-center mb-5">
            <TiTick className="text-green-600 font-medium mx-auto text-7xl p-3 rounded-full shadow-lg" />
          </h1>
          <h2 className="text-4xl mb-8 font-semibold text-green-600">
            Successful Payment
          </h2>
          <p className="text-base text-center text-[#505050] mb-6 text-balance">
            Congratulation
          </p>
          {/* Payment Info */}
          <div className="mb-5">
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-bold">
                Payment Type:
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                {latestPayment?.paymentType
                  ? latestPayment?.paymentType
                  : "Data Not Found"}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-bold">
                Payment Issuer:
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                {latestPayment?.paymentIssuer
                  ? latestPayment?.paymentIssuer
                  : "Data Not Found"}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-bold">
                Name :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                {latestPayment?.customerName
                  ? latestPayment?.customerName
                  : "Data Not Found"}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-bold">
                Email :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                {latestPayment?.customerEmail
                  ? latestPayment?.customerEmail
                  : "Data Not Found"}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-bold">
                Transaction Id :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                {latestPayment?.paymentId.substring(0, 15)
                  ? latestPayment?.paymentId.substring(0, 15)
                  : "Data Not Found"}
                ....
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-bold">
                Amount Paid :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                ${latestPayment?.amount ? latestPayment?.amount : "00.0"}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-bold">
                Date :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                {new Date(latestPayment?.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end">
            <Link to="/dashboard/orders">
              <button className="btn bg-blue-500 hover:bg-blue-600 border-0 text-white w-[187px] h-12 text-base">
                Order Status
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
