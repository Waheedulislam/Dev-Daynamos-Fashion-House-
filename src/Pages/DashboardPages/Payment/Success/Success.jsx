import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import useAuth from "../../../../Components/Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../../Components/Hooks/useAxiosSecure/useAxiosSecure";
import LoadingSpinner from "../../../../Components/Shared/LoadingSpiner/LoadingSpinner";

const Success = () => {
// All Payment Order Page Client Side Code Start

  // const {user , loading} = useAuth()
  // const axiosSecure = useAxiosSecure();
  // const [paymentData, setPaymentData] = useState(null);
  // const [error, setError] = useState(null);
  
  // if(loading){
  //   <LoadingSpinner />
  // };

//   useEffect(() => {
//     axiosSecure.get(`/get-payments?email=${user?.email}`)
//       .then(response => {
//         console.log(response.data)
//         setPaymentData(response.data);
//       })
//       .catch(error => {
//         setError("Error fetching payment data");
//         console.error(error);
//       });
//   }, [user]);

// All Payment Order Page Client Side Code Endpoint

// success payment api call Start:
const {user , loading} = useAuth()
const axiosSecure = useAxiosSecure();
const [successPayments, setSuccessPayments] = useState([]);
const [error, setError] = useState(null);

if(loading){
  <LoadingSpinner />
};

useEffect(() => {
  const userEmail = user?.email;
  axiosSecure.get(`/get-success-payments?email=${userEmail}`)
    .then(data => {
      console.log('seccess page 40:' , data.data[0]);
      setSuccessPayments(data.data[0]);
    })
    .catch(error => {
      setError("Error fetching successful payments");
      console.error(error);
    });
}, [user , loading , axiosSecure]);
  
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col md:w-[442px] md:h-[560px] border p-6 rounded text-center shadow">
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
              <p className="text-[#717171] text-sm md:text-base font-light">
                Payment Type:
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                {successPayments?.paymentIssuer ? successPayments?.paymentIssuer : 'Data Not Found'}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-light">
                Name :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
              {successPayments?.customerName ? successPayments?.customerName : 'Data Not Found'}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-light">
                Email :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
              {successPayments?.customerEmail ? successPayments?.customerEmail : 'Data Not Found'}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-light">
                Transaction Id :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
              {successPayments?.paymentId ? successPayments?.paymentId : 'Data Not Found'}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-light">
                Amount Paid :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                ${successPayments?.amount ? successPayments?.amount : '00.0'}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2 mb-4">
              <p className="text-[#717171] text-sm md:text-base font-light">
                Date :
              </p>
              <p className="text-[#505050] text-sm md:text-base font-light">
                {successPayments?.timestamp? successPayments?.timestamp : 'Data Not Found'}
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end">
            <Link to="/dashboard/order-status">
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
