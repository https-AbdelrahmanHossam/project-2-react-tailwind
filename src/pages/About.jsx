import React from "react";
import About1 from "../assets/about_1.png.webp";
import Person1 from "../assets/person_1.jpg.webp";
import Person2 from "../assets/person_2.jpg.webp";
import Person3 from "../assets/person_3.jpg.webp";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      {/* first */}
      <div className="mt-[96px] grid lg:grid-cols-2">
        <div className="text-center lg:text-left xl:mt-12">
          <span className="inline-block px-5 py-1 mb-2 text-[#FBB244] bg-[#fbb24433] rounded-full text-[10px] font-bold">
            ABOUT
          </span>
          <h1 className="mb-3 text-[30px] md:text-[40px] leading-tight font-bold text-[#081158] xl:w-[70%] ">
            About Us
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
      <div className="grid mt-56 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-1 lg:w-[90%] lg:gap-20 lg:mt-20 xl:col-span-2 xl:w-[80%] xl:mt-0">
          <img src={About1} alt="" />
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
      {/* third */}
      <div className="mt-48 text-center">
        <span className="inline-block px-5 py-1 text-[#FBB244] bg-[#fbb24433] rounded-full text-[10px] font-bold">
          TEAM
        </span>
        <h1 className="mb-3 text-[30px] md:text-[40px] font-mont font-bold text-[#081158]">
          Team
        </h1>
        <p className="mb-9 text-sm text-gray-400 font-thin lg:w-[70%]  mx-auto">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
      <div className="grid gap-10 mt-20 grid-col-1 md:grid-cols-4 place-content-center">
        <div className="flex flex-col gap-5">
          <img src={Person1} alt="person_1" className="w-[229px] rounded-md" />
          <div>
            <h1 className="text-xl font-bold text-black">James Watson</h1>
            <p className="text-[#999999] text-sm">Co-Founder & CEO</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <img src={Person2} alt="person_1" className="w-[229px] rounded-md" />
          <div>
            <h1 className="text-xl font-bold text-black">James Watson</h1>
            <p className="text-[#999999] text-sm">Co-Founder & CEO</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <img src={Person3} alt="person_1" className="w-[229px] rounded-md" />
          <div>
            <h1 className="text-xl font-bold text-black">James Watson</h1>
            <p className="text-[#999999] text-sm">Co-Founder & CEO</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <img src={Person3} alt="person_1" className="w-[229px] rounded-md" />
          <div>
            <h1 className="text-xl font-bold text-black">James Watson</h1>
            <p className="text-[#999999] text-sm">Co-Founder & CEO</p>
          </div>
        </div>
      </div>
      {/* fourth */}
      <Testimonials />
      {/* fifth */}
      <Footer />
    </div>
  );
};

export default About;
