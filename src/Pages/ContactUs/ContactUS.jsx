import NavigationBreadcrumb from "../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import location from "../../assets/contactUS/location.png";
import sms from "../../assets/contactUS/sms.png";
import call from "../../assets/contactUS/call.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const ContactUS = () => {
  const [loader, setLoader] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setLoader(true);
    e.preventDefault();

    emailjs
      .sendForm("service_d89m3au", "template_w855o2i", form.current, {
        publicKey: "xSrqWrSc0E4zhfSTf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          swal("Good job!", "You mail sent successfully!", "success");
          setLoader(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          swal("oops!", "You mail not sent successfully!", "error");
          setLoader(false);
        }
      );
    // Reset the form fields
    e.target.reset();
  };
  return (
    <div className="container mx-auto">
      {/* Breadcrumb start  */}
      <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* Breadcrumb end  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[40px] mb-[110px] px-4">
        <div className="flex items-center flex-col space-y-[8px]">
          <div>
            <img src={sms} className="w-[48px] h-[48px]" alt="Email Icon" />
          </div>
          <p className="text-[20px] font-medium">Email</p>
          <p className="text-[#717171] text-[16px] font-light text-center">info@techheim.com</p>
        </div>

        <div className="flex items-center flex-col space-y-[8px]">
          <div>
            <img src={location} className="w-[48px] h-[48px]" alt="Office Icon" />
          </div>
          <p className="text-[20px] font-medium">Office</p>
          <p className="text-[#717171] text-[16px] font-light text-center">
            123 Main Street, <br /> Anytown, USA
          </p>
        </div>

        <div className="flex items-center flex-col space-y-[8px]">
          <div>
            <img src={call} className="w-[48px] h-[48px]" alt="Phone Icon" />
          </div>
          <p className="text-[20px] font-medium">Phone</p>
          <p className="text-[#717171] text-[16px] font-light text-center">+1 (555) 123-4567</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] mt-[40px]  items-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-md mb-6 transition-transform transform hover:scale-105">
          <p className="text-3xl font-semibold text-indigo-600">Message Us</p>
          <p className="text-gray-700 text-lg font-light mt-2">
            We're here to assist you every step of the way. Whether you have a question, need
            technical support, or simply want to share your feedback, our dedicated team is ready to
            listen and provide prompt assistance.
          </p>
        </div>

        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 p-4 rounded-[30%_70%_0%_100%/30%_12%_88%_70%]">
          <div className="bg-white p-10 shadow-lg w-full max-w-md transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-600 opacity-30 transition-opacity duration-300"></div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center relative z-10">
              Contact Us
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  className="mt-1 w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:shadow-md"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  className="mt-1 w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:shadow-md"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="mt-1 w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:shadow-md"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  value="Send"
                  className="w-full bg-indigo-600 text-white p-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  {loader ? (
                    <span className="loading loading-dots loading-lg"></span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactUS;
