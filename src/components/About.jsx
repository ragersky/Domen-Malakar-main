// countup
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";
import aboutimg from "../assets/about.png";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className=" py-20" id="about" ref={ref}>
      <div className="w-11/12 max-w-[1300px] mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          {/* img */}
          <div className="flex justify-center sm:justify-normal">
            <img src={aboutimg} alt="" className="w-10/12" />
          </div>

          {/* text  */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent text-center sm:text-left">
              Domen Mlakar
            </h2>
            <h3 className="h3 mb-4 text-center sm:text-left">
              strasten ustvarjalec, ki rad zajema pristne trenutke.
            </h3>
            <p className="mb-6">
              <br></br>
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-14 flex-col md:flex-row items-center text-center gap-y-5">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={9} duration={6} /> : null}{" "}
                  let
                </div>
                <div className="font-primary capitalize text-sm tracking-[4px]">
                  delovanja in ustvarjanja. <br />
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={50} suffix="+" duration={3} />
                  ) : null}
                </div>
                <div className="font-primary capitalize text-sm tracking-[5px]">
                  projektnih sodelovanj.
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary capitalize text-sm tracking-[3px]">
                  Zadovoljnih strank.
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 justify-center  items-center ">
              <Link to="/kontakt">
                <button className="btn btn-lg">Kontakt </button>
              </Link>
              <Link to="/gallery" className="text-gradient btn-link w-24">
                Foto
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
