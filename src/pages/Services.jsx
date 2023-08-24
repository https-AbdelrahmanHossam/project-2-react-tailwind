import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import About1 from "../assets/about_1.png.webp";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { RxRocket } from "react-icons/rx";
import { GiBreakingChain, GiTrophyCup } from "react-icons/gi";
import { MdOutlineLocalPolice, MdEditDocument } from "react-icons/md";
import { LiaBullhornSolid } from "react-icons/lia";

const Services = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      {/* first */}
      <div className="mt-[96px] grid lg:grid-cols-2 gap-10 md:gap-0">
        <div className="text-center lg:text-left xl:mt-12">
          <span className="inline-block px-5 py-1 mb-2 text-[#FBB244] bg-[#fbb24433] rounded-full text-[10px] font-bold">
            SERVICES
          </span>
          <h1 className="mb-3 text-[30px] md:text-[40px] leading-tight font-bold text-[#081158] xl:w-[70%] ">
            Services
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
      <div className="container mt-44">
        <div className="grid lg:grid-cols-2 justify-items-center gap-y-7">
          <div className="flex gap-4 border border-[#efefef] p-[30px]  lg:w-[90%] 2xl:w-[90%]">
            <div className="relative">
              <span className="before:block before:absolute before:w-[40px] before:h-[40px] before:-top-4 before:left-4 before:bg-[#fbb24480] before:rounded-full before:-z-10"></span>
              <MdOutlineLocalPolice size={45} color="gray" />
            </div>
            <div>
              <p className="mb-2 text-lg font-bold">Design Marketing</p>
              <p className="text-sm font-extralight">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </p>
            </div>
          </div>
          <div className="flex gap-4 border border-[#efefef] p-[30px] lg:w-[90%] 2xl:w-[90%]">
            <div className="relative">
              <span className="before:block before:absolute before:w-[40px] before:h-[40px] before:-top-3 before:left-4 before:bg-[#fbb24480] before:rounded-full before:-z-10"></span>
              <RxRocket size={45} color="gray" />
            </div>
            <div>
              <p className="mb-2 text-lg font-bold">Seo Marketing</p>
              <p className="text-sm font-extralight">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </p>
            </div>
          </div>
          <div className="flex gap-4 border border-[#efefef] p-[30px] lg:w-[90%] 2xl:w-[90%]">
            <div className="relative">
              <span className="before:block before:absolute before:w-[40px] before:h-[40px] before:-top-3 before:left-4 before:bg-[#fbb24480] before:rounded-full before:-z-10"></span>
              <LiaBullhornSolid size={45} color="gray" />
            </div>
            <div>
              <p className="mb-2 text-lg font-bold">Internet Marketing</p>
              <p className="text-sm font-extralight">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </p>
            </div>
          </div>
          <div className="flex gap-4 border border-[#efefef] p-[30px]  lg:w-[90%] 2xl:w-[90%]">
            <div className="relative">
              <span className="before:block before:absolute before:w-[40px] before:h-[40px] before:-top-3 before:left-4 before:bg-[#fbb24480] before:rounded-full before:-z-10"></span>
              <GiBreakingChain size={45} color="gray" />
            </div>
            <div>
              <p className="mb-2 text-lg font-bold">BackLinks Marketing</p>
              <p className="text-sm font-extralight">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </p>
            </div>
          </div>
          <div className="flex gap-4 border border-[#efefef] p-[30px]   lg:w-[90%] 2xl:w-[90%]">
            <div className="relative">
              <span className="before:block before:absolute before:w-[40px] before:h-[40px] before:-top-3 before:left-4 before:bg-[#fbb24480] before:rounded-full before:-z-10"></span>
              <MdEditDocument size={45} color="gray" />
            </div>
            <div>
              <p className="mb-2 text-lg font-bold">Social Marketing</p>
              <p className="text-sm font-extralight">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </p>
            </div>
          </div>
          <div className="flex gap-4 border border-[#efefef] p-[30px] lg:w-[90%] 2xl:w-[90%]">
            <div className="relative">
              <span className="before:block before:absolute before:w-[40px] before:h-[40px] before:-top-3 before:left-4 before:bg-[#fbb24480] before:rounded-full before:-z-10"></span>
              <GiTrophyCup size={45} color="gray" />
            </div>
            <div>
              <p className="mb-2 text-lg font-bold">Marketing Analysis</p>
              <p className="text-sm font-extralight">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="container mt-56">
        <div className="text-center">
          <span className="inline-block px-5 py-1 text-[#FBB244] bg-[#fbb24433] rounded-full text-[10px] font-bold">
            STATS
          </span>
          <h1 className="mb-3 text-[30px] md:text-[40px] font-mont font-bold text-[#081158]">
            Stats
          </h1>
          <p className="mb-9 text-sm text-gray-400 font-thin lg:w-[60%]  mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
          <div className="grid grid-cols-1 gap-10 mt-24 text-center md:grid-cols-2 lg:grid-cols-4 place-content-center">
            <h1 className="text-6xl text-[#081158] font-bold">
              {counterOn && (
                <CountUp start={0} end={3923} duration={3} delay={0} />
              )}
            </h1>
            <h1 className="text-6xl text-[#081158] font-bold">
              {counterOn && (
                <CountUp start={0} end={131} duration={3} delay={0} />
              )}
            </h1>
            <h1 className="text-6xl text-[#081158] font-bold">
              {counterOn && (
                <CountUp start={0} end={962} duration={3} delay={0} />
              )}
            </h1>
            <h1 className="text-6xl text-[#081158] font-bold">
              {counterOn && (
                <CountUp start={0} end={5949} duration={3} delay={0} />
              )}
            </h1>
          </div>
        </ScrollTrigger>
      </div>
      {/* third */}
      <Testimonials />
      {/* fourth */}
      <Footer />
    </div>
  );
};

export default Services;
