import React from "react";
import About1 from "../assets/about_1.png.webp";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div>
      {/* first */}
      <div className="mt-[96px] grid lg:grid-cols-2 gap-10 md:gap-0">
        <div className="text-center lg:text-left xl:mt-12">
          <span className="inline-block px-5 py-1 mb-2 text-[#FBB244] bg-[#fbb24433] rounded-full text-[10px] font-bold">
            CONTACT
          </span>
          <h1 className="mb-3 text-[30px] md:text-[40px] leading-tight font-bold text-[#081158] xl:w-[70%] ">
            Get In Touch
          </h1>
          <p className="mb-9 text-sm text-gray-400 font-thin lg:w-[80%]">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <button className="rounded-full p-3 mr-2 w-40 mb-2 border border-[#081158] bg-[#081158] text-white hover:bg-white hover:text-[#081158] hover:border-[#081158] transition duration-300">
            How We work
          </button>
          <button className="rounded-full p-3 mr-2 w-40 border border-[#081158] bg-white text-[#081158] hover:bg-[#081158] hover:text-white transition duration-300">
            Contact us
          </button>
        </div>
        <div className="md:w-[75%] lg:w-full mx-auto">
          <img src={About1} alt="hero.jpg" />
        </div>
      </div>
      {/* second */}
      <div className="mt-36">
        <div className="py-9 xl:px-80">
          <span className="inline-block  text-[#00000080] text-sm font-bold">
            Contact Us
          </span>
          <h1 className="text-[30px] md:text-[40px] leading-tight font-bold text-[#081158]">
            Let's have a talk
          </h1>
        </div>
        <div className="xl:px-80">
          <form action="#">
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-400">First Name</label>
                <input type="text" className="px-2 py-2 border-2 rounded-sm" />
              </div>
              <div className="flex flex-col ">
                <label className="text-sm text-gray-400">Last Name</label>
                <input type="text" className="px-2 py-2 border-2 rounded-sm" />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm text-gray-400">Email Address</label>
              <input
                type="text"
                className="px-2 py-2 mb-5 border-2 rounded-sm"
              />

              <label className="text-sm text-gray-400">Message</label>
              <textarea
                cols="30"
                rows="5"
                className="border-2 rounded-sm"
              ></textarea>
            </div>
            <button className="rounded-full p-3 mr-2 w-40 border border-[#081158] bg-[#081158] text-white hover:bg-white hover:text-[#081158] hover:border-[#081158] transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* third */}
      <Footer />
    </div>
  );
};

export default ContactUs;
