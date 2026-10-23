import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

import ProjectData from "../Data/ProjectsData";
import { Link, useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();
  return (
    <section className="section " id="work">
      <div className="w-11/12 max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-8">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-4 mb-10 lg:mb-0"
          >
            {/* Prva levo */}
            <div>
              <h2 className="text-[75px] text-center px-0 sm:text-left font-primary text-accent leading-tight max-w-sm mb-8">
                Projekti <br className="sm:block hidden" />
              </h2>
              <p className="text-[20px] text-center sm:text-left max-w-sm mb-8"></p>
              <Link to="/gallery">
                {/* <button className="btn btn-sm  mx-auto sm:mx-0 flex justify-center items-center">  
                  Foto
                </button> */}
              </Link>
            </div>
            {/* image */}
          </motion.div>
        </div>
        <div className="flex flex-wrap mt-9 gap-y-20">
          {ProjectData?.map((item) => {
            const isReverse =
              item.direction === "flex-row-reverse" ? true : false;
            return (
              <div
                key={item.id}
                className={`w-full flex max-[768px]:flex-col gap-y-10  gap-100 items-center ${item.direction} pb-20 relative`}
              >
                <div className="md:w-1/2 flex flex-col items-center  w-full text-center ">
                  <motion.h2
                    variants={fadeIn(isReverse ? "left" : "right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-6xl uppercas break-alle"
                  >
                    {item.title}
                  </motion.h2>

                  <div className="flex flex-wrap gap-3">
                    <motion.button
                      onClick={() =>
                        navigate(`/gallery/${item.title}`, {
                          state: { item },
                        })
                      }
                      variants={fadeIn(isReverse ? "left" : "right", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.3 }}
                      className="btn btn-lg mt-5"
                    >
                      {item.btnText}
                    </motion.button>

                    {item?.btnVideo && (
                      <motion.button
                        onClick={() =>
                          navigate(`/videos`, {
                            state: { item },
                          })
                        }
                        variants={fadeIn(isReverse ? "left" : "right", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="btn btn-lg mt-5"
                      >
                        {item.btnVideo}
                      </motion.button>
                    )}
                  </div>
                </div>
                <motion.div
                  variants={fadeIn(isReverse ? "right" : "left", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="md:w-full  w-full  flex justify-center items-center"
                >
                  <img
                    src={item.img}
                    alt=""
                    loading="lazy"
                    className="hover:scale-105 md:h-screen min-[1400px]:h-max duration-300 max-[768px]:w-11/12"
                  />
                </motion.div>
                <div className="h-[1px] w-full bg-gray-400 absolute bottom-0 left-0"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
