import React from "react";

const Footer = () => {
  return (
    <section
      className="max-w-[90%] mx-auto px-3 py-8 mt-7"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="pb-3">
            <h5 className="font-bold pb-2">Company</h5>
            <a href="/about" className="text-gray-600 hover:text-blue-500">
              <p>About Us</p>
            </a>
            <a href="/career" className="text-gray-600 hover:text-blue-500">
              <p>Career</p>
            </a>
            <a
              href="/ProductPricing"
              className="text-gray-600 hover:text-blue-500"
            >
              <p>Product & Pricing</p>
            </a>
          </div>

          
          <div className="pb-3">
            <h5 className="font-bold pb-2">Product</h5>
            <a
              href="/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
            >
              <p>Privacy Policy</p>
            </a>
            <p className="text-gray-600">Features</p>
            <a href="/ourapps" className="text-gray-600 hover:text-blue-500">
              <p>Sales Software</p>
            </a>
          </div>

         
          <div className="pb-3">
            <h5 className="font-bold pb-2">Help Center</h5>
            <p className="text-gray-600">Support</p>
            <a href="/query-form" className="text-gray-600 hover:text-blue-500">
              <p>Book Demo</p>
            </a>
            <a
              href="/terms-and-conditions"
              className="text-gray-600 hover:text-blue-500"
            >
              <p>Term & Condition</p>
            </a>
          </div>

         
          <div className="pb-3">
            <h5 className="font-bold pb-2">Get In Touch</h5>
            <p className="my-2 text-gray-600">
              Address - M-0042, Ground Floor, Akshar Business Park, Plot no. 3,
              Vashi - Navi Mumbai-400703
            </p>
            <p className="my-1 text-gray-600">
              <a href="mailto: info@uponly.com" className="hover:text-blue-500">
                Email Id - info@uponlytech.com
              </a>
            </p>
            <p className="text-gray-600">
              <a href="tel: +91 22 4605 2303" className="hover:text-blue-500">
                Contact no. - 02246052303
              </a>
            </p>
          </div>
        </div>

        <hr className="my-6" />

        <div className="tech_footer_icon my-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">© 2024 UPONLY Technologies</p>
            <div className="flex">
              <a
                href="https://www.linkedin.com/company/uponly-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img
                  src="/assets/linkedin.png"
                  alt="LinkedIn"
                  width="40"
                  className="hover:opacity-80"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img
                  src="/assets/insta.png"
                  alt="Instagram"
                  width="40"
                  className="hover:opacity-80"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img
                  src="/assets/facebook.png"
                  alt="Facebook"
                  width="40"
                  className="hover:opacity-80"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
