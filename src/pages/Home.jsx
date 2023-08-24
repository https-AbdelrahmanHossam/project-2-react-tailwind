import React from "react";
import Hero from "../assets/hero_1.png.webp";
import About from "../assets/about_1.png.webp";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { RxRocket } from "react-icons/rx";
import { GiBreakingChain, GiTrophyCup } from "react-icons/gi";
import { MdOutlineLocalPolice, MdEditDocument } from "react-icons/md";
import { LiaBullhornSolid } from "react-icons/lia";

const Home = () => {
  return (
    <>
      {/* first */}
      <div className="mt-[96px] grid lg:grid-cols-2">
        <div className="text-center lg:text-left xl:mt-12">
          <span className="inline-block px-5 py-1 mb-2 text-[#FBB244] bg-[#fbb24433] rounded-full text-[10px] font-bold">
            WELCOME TO OUR SITE
          </span>
          <h1 className="mb-3 text-[30px] md:text-[40px] leading-tight font-bold text-[#081158] xl:w-[70%] ">
            Expert SEO, SEM Services in London
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
          <img src={Hero} alt="hero.jpg" />
        </div>
      </div>
      {/* second */}
      <div className="container mt-28">
        <div className="text-center ">
          <span className="inline-block px-5 py-1 text-[#FBB244] bg-[#fbb24433] rounded-full text-[10px] font-bold">
            FEATURES
          </span>
          <h1 className="mb-3 text-[30px] md:text-[40px] font-mont font-bold text-[#081158]">
            Our Features
          </h1>
          <p className="mb-9 text-sm text-gray-400 font-thin lg:w-[50%]  mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="grid gap-20 mt-14 lg:grid-cols-3 lg:gap-26 xl:gap-36">
          <div className="relative flex flex-col items-center text-center ">
            <span className="before:block before:absolute before:w-[40px] before:h-[40px] before:-top-4 before:left-26 before:bg-[#fbb24480] before:rounded-full before:-z-10"></span>
            <RxRocket size={45} color="gray" />
            <p className="mb-2 text-lg font-bold">Marketing Analysis</p>
            <p className="text-sm font-extralight">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center">
            <span className="before:block before:absolute before:w-[40px] before:h-[40px] before:-top-4 before:left-26 before:bg-[#fbb24480] before:rounded-full before:-z-10"></span>
            <GiBreakingChain size={45} color="gray" />
            <p className="mb-2 text-lg font-bold">Digital Marketing</p>
            <p className="text-sm font-extralight">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center">
            <span className="before:block before:absolute before:w-[40px] before:h-[40px] before:-top-4 before:left-26 before:bg-[#fbb24480] before:rounded-full before:-z-10"></span>
            <GiTrophyCup size={45} color="gray" />
            <p className="mb-2 text-lg font-bold">SEO and Backlinks</p>
            <p className="text-sm font-extralight">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts
            </p>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="grid mt-56 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-1 lg:w-[90%] lg:gap-20 lg:mt-20 xl:col-span-2 xl:w-[80%] xl:mt-0">
          <img src={About} alt="" />
        </div>
        <div className="mt-10 lg:mt-0 ">
          <span className="inline-block px-5 py-1 text-[#FBB244] bg-[#fbb24433] rounded-full text-[10px] font-bold">
            ABOUT US
          </span>
          <h1 className="mb-3 text-[30px] md:text-[40px] font-mont font-bold text-[#081158]">
            Why our agency?
          </h1>
          <div className="text-sm font-thin text-gray-400">
            <p className="mb-4">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </p>
            <p className="mb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <ul className="pl-4 mb-12 list-disc">
              <li>Behind the word mountains</li>
              <li>Bookmarksgrove right at the coast</li>
              <li>Semantics, a large language</li>
            </ul>
          </div>
          <button className="rounded-full p-3 mr-2 w-36 mb-2 border border-[#081158] bg-[#081158] text-white hover:bg-white hover:text-[#081158] hover:border-[#081158] transition duration-300">
            About us
          </button>
        </div>
      </div>
      {/* fourth */}
      <div className="container mt-56">
        <div className="text-center">
          <span className="inline-block px-5 py-1 text-[#FBB244] bg-[#fbb24433] rounded-full text-[10px] font-bold">
            SERVICES
          </span>
          <h1 className="mb-3 text-[30px] md:text-[40px] font-mont font-bold text-[#081158]">
            Our Services
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 justify-items-center gap-y-7">
          <div className="flex gap-4 border border-[#efefef] p-[30px]  lg:w-[80%] 2xl:w-[70%]">
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
          <div className="flex gap-4 border border-[#efefef] p-[30px] lg:w-[80%] 2xl:w-[70%]">
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
          <div className="flex gap-4 border border-[#efefef] p-[30px] lg:w-[80%] 2xl:w-[70%]">
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
          <div className="flex gap-4 border border-[#efefef] p-[30px]  lg:w-[80%] 2xl:w-[70%]">
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
          <div className="flex gap-4 border border-[#efefef] p-[30px]   lg:w-[80%] 2xl:w-[70%]">
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
          <div className="flex gap-4 border border-[#efefef] p-[30px] lg:w-[80%] 2xl:w-[70%]">
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
      {/* fifth */}
      <Testimonials />
      {/* sixth */}
      <Footer />
    </>
  );
};

export default Home;
