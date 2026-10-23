import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
// variants
import { fadeIn } from "../../variants";

import logo from "../../assets/domen-logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
const Kontakt = () => {
  return (
    <section
      className="pb-16 min-h-screen  bg-site bg-no-repeat bg-cover"
      id="contact"
    >
      <div className="pt-8 w-11/12 mb-20 sm:mb-0 mx-auto max-w-[1300px]">
        <Link to={`/`} className="inline-block  ">
          <img src={logo} alt="Logo" className="md:size-32 size-20 mb-6" />
        </Link>
      </div>
      <div className="container mx-auto pt-8">
        {/* <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-col text-center flex justify-start items-center"
        >
          <h4 className="text-xl text-center  uppercase text-accent font-medium mb-2 tracking-wide">
            Kontakt (To še fixnemo)
          </h4>
          <h2 className="text-[45px] text-center sm:text-left lg:text-[50px] leading-none my-8">
            Kontakt <br />
          </h2>
          <h4 className="text-xl text-center  uppercase text-accent font-medium mb-2 tracking-wide">
            Podroben Cenik
          </h4>
          <h2 className="text-[45px] text-center  mt-5 sm:mt-0 lg:text-[50px] leading-none mb-12">
            <button className="btn btn-lg">Cenik & Ponudbe</button>
          </h2>
        </motion.div> */}
        <div className="flex justify-center flex-col gap-y-5 min-h-[50vh] items-center">
          <h2 className="text-3xl">
            <span className="capitalize">
              za več informacij nas prosim kontaktirajte na:
              <div></div>
            </span>
            <a
              href="mailto:info@domenmlakar.si"
              className="text-2xl font-semibold mx-2"
            >
              info@domenmlakar.si
            </a>
          </h2>
          {/* text */}
          {/* <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl text-center sm:text-left uppercase text-accent font-medium mb-2 tracking-wide">
                Kontakt (To še fixnemo)
              </h4>
              <h2 className="text-[45px] text-center sm:text-left lg:text-[50px] leading-none my-8">
                Kontakt <br />
              </h2>
              <h4 className="text-xl text-center sm:text-left uppercase text-accent font-medium mb-2 tracking-wide">
                Podroben Cenik
              </h4>
              <h2 className="text-[45px] text-center sm:text-left mt-5 sm:mt-0 lg:text-[50px] leading-none mb-12">
                <button className="btn btn-lg">Cenik & Ponudbe</button>
              </h2>
            </div>
          </motion.div> */}
          {/* form */}
          {/* <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-10/12 md:w-[700px] mx-auto border rounded-2xl flex flex-col gap-y-6 pb-12 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Ime"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Sporocilo"
            ></textarea>
            <button className="btn btn-lg mx-auto">Kontakt</button>
          </motion.form>
        </div> */}

          {/* Return Home Button
        <motion.div
          variants={fadeIn("up", 0.3)} // Add fadeIn effect (upwards animation)
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center mt-36"
        >
          <Link to="/">
            <button className="btn btn-sm">Glavna Stran</button>
          </Link>
        </motion.div> */}
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
      </div>
    </section>
  );
};

export default Kontakt;
