import React from "react";
import icon from "../assets/icon.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import icon1 from "../assets/footer_icons/icon1.png";
import icon2 from "../assets/footer_icons/icon2.png";
import icon3 from "../assets/footer_icons/icon3.png";
import icon4 from "../assets/footer_icons/icon4.png";

const Footer = () => {
  return (
    <footer className="bg-[#BCDDFE] text-gray-800 w-full">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start px-4 md:px-6 py-12 max-w-[1200px] mx-auto gap-8 md:gap-16">
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src={icon} alt="Logo" className="w-[38px] h-[36px]" />
            <p className="font-poppins font-bold text-lg">E-Comm</p>
          </div>
          <p className="font-proxima text-xs md:text-sm max-w-[280px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever. Since the 1500s, when an unknown printer.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <h3 className="font-poppins font-medium text-lg">Follow Us</h3>
          <p className="font-proxima text-xs max-w-[200px]">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-600 transition-colors"
            >
              <img src={facebook} alt="Facebook" className="w-3 h-3" />
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-400 transition-colors"
            >
              <img src={twitter} alt="Twitter" className="w-4 h-3" />
            </a>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <h3 className="font-poppins font-medium text-lg">Contact Us</h3>
          <p className="font-proxima text-xs max-w-[200px]">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 px-4 md:px-6 py-12 max-w-[1200px] mx-auto">
        {[
          { title: "Information", items: ["About Us", "Infomationt", "Privacy Policy", "Terms & Conditions"] },
          { title: "Service", items: ["About Us", "Infomationt", "Privacy Policy", "Terms & Conditions"] },
          { title: "My Account", items: ["About Us", "Infomationt", "Privacy Policy", "Terms & Conditions"] },
          { title: "Our Offers", items: ["About Us", "Infomationt", "Privacy Policy", "Terms & Conditions"] },
        ].map((col, idx) => (
          <div key={idx}>
            <h3 className="font-poppins font-normal text-lg mb-4">{col.title}</h3>
            <ul className="font-poppins font-normal text-sm space-y-2">
              {col.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 py-4 px-4 md:px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#C1C8CE]">
          © 2018 Ecommerce theme by{" "}
          <a href="https://www.bisenbaev.com" className="underline">
            www.bisenbaev.com
          </a>
        </p>
        <div className="flex items-center gap-4">
          {[icon1, icon2, icon3, icon4].map((icon, idx) => (
            <img key={idx} src={icon} alt={`payment${idx}`} className="h-6" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;



