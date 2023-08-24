import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* question section */}
      <div
        onClick={() => setShow(!show)}
        className="flex items-center justify-between cursor-pointer"
      >
        <h1 className="text-lg font-bold text-black">{question}</h1>
        <BiChevronDown
          size={22}
          className={`transition-all duration-300 ${show ? "rotate-180" : ""}`}
        ></BiChevronDown>
      </div>

      {/* answer section */}
      {show && (
        <AnimatePresence>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            <p className="pt-3 text-sm text-gray-400 w-[65%]">{answer}</p>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Accordion;
