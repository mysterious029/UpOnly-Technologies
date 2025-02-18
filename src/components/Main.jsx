import React from "react";
import { useState } from "react";

const Main = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center">
        <img
          src="/assets/image.png"
          alt="Content 1"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text & Arrow Section */}
      <div className="flex flex-col items-center justify-center text-center mt-[7rem] px-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Innovative Lead Management with{" "}
          <span className="text-blue-600">UPONLY One</span>
        </h1>

        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Streamline Your Lead Funnel with Our Innovative, Cloud-Based Solution
        </p>

        {/* Arrow Banner */}
        <div className="relative my-16 w-full max-w-[530px]">
          <div className="relative flex items-center justify-center text-black font-bold text-lg md:text-xl bg-[#e8f0fe] px-12 py-3 shadow-lg rounded-md">
            {/* Left Arrow */}
            <div className="absolute left-0 -ml-6 w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-r-[30px] border-r-[#e8f0fe]"></div>

            <span>Capture. Nurture. Convert.</span>

            {/* Right Arrow */}
            <div className="absolute right-0 -mr-6 w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-l-[30px] border-l-[#e8f0fe]"></div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/assets/image2.png"
            alt="Content 2"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="relative my-16 w-full max-w-[530px]">
          <div className="relative flex items-center justify-center text-black font-bold text-lg md:text-xl bg-[#e8f0fe] px-12 py-3 shadow-lg rounded-md">
            {/* Left Arrow */}
            <div className="absolute left-0 -ml-6 w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-r-[30px] border-r-[#e8f0fe]"></div>

            <span> How to ace Lead management</span>

            {/* Right Arrow */}
            <div className="absolute right-0 -mr-6 w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-l-[30px] border-l-[#e8f0fe]"></div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/assets/image4.png"
            alt="Content 3"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="relative my-16 w-full max-w-[540px]">
          <div className="relative flex items-center justify-center text-black font-bold text-lg md:text-xl bg-[#e8f0fe] px-12 py-3 shadow-lg rounded-md">
            {/* Left Arrow */}
            <div className="absolute left-0 -ml-6 w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-r-[30px] border-r-[#e8f0fe]"></div>

            <span>
              {" "}
              UPLEAD with <span className="text-blue-600">UPONLY One</span> Lead
              Management Process Optimization
            </span>

            {/* Right Arrow */}
            <div className="absolute right-0 -mr-6 w-0 h-0 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent border-l-[30px] border-l-[#e8f0fe]"></div>
          </div>
        </div>

        {/* BOOK A DEMO Button - Adjusted for Laptop Screens */}
        <button
          type="button"
          className="fixed right-[-3rem] top-1/2 -translate-y-1/2 bg-blue-200 text-[#3371b9] text-md font-bold py-2 px-4 rounded-l-lg shadow-lg rotate-90 origin-center hover:bg-blue-300 transition duration-300 z-50"
          onClick={handleClick}
        >
          BOOK A DEMO
        </button>

        <div className="fixed right-4 bottom-4 z-50">
          <a
            href="tel:+919999999999"
            className="w-16 h-16 flex items-center justify-center bg-blue-200 rounded-full shadow-lg hover:bg-blue-300 transition duration-300"
          >
            <img
              src="/assets/phone.png"
              width="32"
              height="32"
              className="transition-opacity duration-300 opacity-100 hover:opacity-0"
              alt="Call Us"
            />
            <img
              src="/assets/phone2.png"
              width="32"
              height="32"
              className="absolute transition-opacity duration-300 opacity-0 hover:opacity-100"
              alt="Call Us"
            />
          </a>
        </div>
      </div>

      <div className="bg-[#d1dfef] px-6 py-6 md:py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">
            Integrated Cloud Calling
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4">
            Your Direct Line to Sales Success
          </h2>

          <ul className="text-left mx-auto mb-8 space-y-3 max-w-3xl text-xl md:text-2xl">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              Dial Leads in One Click from within the lead management dashboard
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              Access Call Records for sales process tracking and reference
            </li>
          </ul>

          <div className="flex items-center justify-center">
            <img
              src="/assets/image5.png"
              alt="Content 5"
              className="w-4/5 md:w-3/4 h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="/assets/image8.png"
          alt="Content 1"
          className="w-4/5 md:w-3/4 h-auto object-cover"
        />
      </div>

      <div className="flex items-center justify-center">
        <img
          src="/assets/image9.png"
          alt="Content 1"
          className="w-4/5 md:w-3/4 h-auto object-cover"
        />
      </div>

      <div className="bg-[#d1dfef]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Book a Demo
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Transform Your Lead Management Today - Get Started with{" "}
                <span className="text-blue-600 font-semibold">UPONLY One!</span>
              </p>
              <button
                className="w-full md:w-auto px-8 py-4 text-lg bg-blue-600 text-white hover:bg-blue-700 transition-all rounded-lg"
                onClick={handleClick}
              >
                Book Now
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="flex items-center justify-center">
              <img
                src="/assets/image10.png"
                alt="Content 5"
                className="w-full h-full object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
            <h2 className="text-2xl font-semibold mb-4">
              Thank You for Booking!
            </h2>
            <p>Your demo request has been submitted successfully.</p>
            <button
              onClick={closePopup}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
