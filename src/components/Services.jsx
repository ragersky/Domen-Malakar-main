import React from "react";
import { Link, useNavigate } from "react-router-dom";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// image import
import Img1 from "../assets/portfolio-img1.png";

// services data
const services = [
  {
    name: "Poroke",
    description: "Filleri in dodatni teksti + slika?",
  },
  {
    name: "Zabave",
    description: ".. rojstni dnevi / birme / druženja / abrahami",
  },
  {
    name: "Slikanje / Video",
    description: "Filleri in dodatni teksti + slika?",
  },
  {
    name: "Product Branding",
    description: "Filleri in dodatni teksti + slika?",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/gallery");
  };

  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="text-[40px] text-center sm:text-left font-primary text-accent mb-16">
              Ponudbe
            </h2>
            <h3 className="text-[28px] text-center sm:text-left font-primary max-w-[455px] mb-16">
              <u>Zanesljivo</u> in <u>hitro</u> odzivanje.
              <br></br>
              <br></br>
              Skupaj realizirajmo projekt!
            </h3>
            <button
              className="btn btn-md bg-accent text-black py-3 px-10 rounded-lg-2 shadow-md hover:bg-accent-dark transition duration-300 mx-auto sm:mx-0  flex justify-center items-center"
              onClick={handleButtonClick}
            >
              Kontakt
            </button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[180px] mb-[48px] flex items-center"
                    key={index}
                  >
                    <img
                      src={Img1}
                      alt={name}
                      className="w-32 h-32 object-cover mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-[24px] tracking-wider font-primary font-semibold">
                          {name}
                        </h4>
                        <Link
                          to="/gallery"
                          className="ml-4 text-accent text-[24px] flex items-center"
                        >
                          <BsArrowUpRight />
                        </Link>
                      </div>
                      <p className="font-secondary text-[16px] leading-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
