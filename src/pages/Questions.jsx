import React, { useState } from "react";
import About1 from "../assets/about_1.png.webp";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import { accordion } from "../components/index";
import Accordion from "../components/Accordion";

const Questions = () => {
  return (
    <div>
      {/* first */}
      <div className="mt-[96px] grid lg:grid-cols-2 gap-10 md:gap-0">
        <div className="text-center lg:text-left xl:mt-12">
          <span className="inline-block px-5 py-1 mb-2 text-[#FBB244] bg-[#fbb24433] rounded-full text-[10px] font-bold">
            FAQ
          </span>
          <h1 className="mb-3 text-[30px] md:text-[40px] leading-tight font-bold text-[#081158] xl:w-[70%] ">
            Frequently Asked Questions
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
      <div className="mt-56">
        <div className="text-center ">
          <span className="inline-block px-5 py-1 text-[#FBB244] bg-[#fbb24433] rounded-full text-[10px] font-bold">
            FAQ
          </span>
          <h1 className="mb-3 text-[30px] md:text-[40px] font-mont font-bold text-[#081158]">
            Frequently Asked Questions
          </h1>
          <p className="mb-9 text-sm text-gray-400 font-thin lg:w-[60%]  mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="flex flex-col gap-4 mx-auto mt-10 ">
          {accordion.map((item, id) => {
            const { question, answer } = item;
            return (
              <div
                key={id}
                className="p-5 duration-300 rounded-md hover:bg-[#efefef]"
              >
                <Accordion question={question} answer={answer}></Accordion>
              </div>
            );
          })}
        </div>
      </div>
      {/* Third */}
      <Testimonials />
      {/* Fourth */}
      <Footer />
    </div>
  );
};

export default Questions;
