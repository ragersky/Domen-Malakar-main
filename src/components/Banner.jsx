// images
import Image from "../assets/avatar.svg"; // To je original, zgleda kr SICK
//import Slika from '../assets/domci.jpg';
// icons
import { FaInstagram, FaFacebook } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className=" pt-20 flex items-center" id="home">
      <div className="  w-11/12 max-w-[1300px] mx-auto">
        <div className="flex  w-full flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-1">
          {/* text */}
          <div className=" w-full  text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[1.1] lg:text-[100px]"
            >
              DOMEN <span>MLAKAR</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4 block sm:inline sm:m-o my-6">
                Multimedia
              </span>

              <TypeAnimation
                sequence={[
                  "Poroke.",
                  1500,
                  "Zabave.",
                  1500,
                  "Dogodki.",
                  1500,
                  "Foto.",
                  1500,
                  "Video.",
                  1500,
                ]}
                speed={60} // Hitrost brisanja texta POROKE, ZABAVE...
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg px-1 justify-center mx-auto lg:mx-10 sm:text-left text-center flex text-[35px]"
            ></motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              {" "}
              {/* Kontakt inFoto gumba na začetku*/}
              <Link to="/kontakt">
                <button className="btn btn-lg text-[18px] ">Kontakt</button>
              </Link>
              <Link
                to="/gallery"
                className="text-gradient btn-link flex text-[20px] w-24 "
              >
                Foto
              </Link>
            </motion.div>
            {/* socials ikonice */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.instagram.com/domen_mlakar/"
                target="_blank"
                className="hover:scale-110 duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/domenm2"
                target="_blank"
                className="hover:scale-110 duration-300"
              >
                <FaFacebook />
              </a>
            </motion.div>
          </div>
          {/* slikica */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            {/* slikica 
                      /* <img src={Slika} alt='' />*/}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
