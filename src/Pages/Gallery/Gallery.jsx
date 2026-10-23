import { memo } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import GalleryData from "../../Data/GalleryData";
import logo from "../../assets/domen-logo.png";
import { Link, useNavigate } from "react-router-dom";

const Gallery = memo(() => {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="pb-16 bg-black bg-no-repeat bg-cover w-full min-h-screen"
        id="gallery"
      >
        <div className="w-full max-w-[1300px] px-4 pt-8 mx-auto">
          {/* Logo Section */}
          <div className="inline-block">
            <Link to={`/`} className="">
              <img src={logo} alt="Logo" className="md:size-32 size-20 mb-6" />
            </Link>
          </div>

          {/* Motion Text Effect */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
            className="text-center"
          >
            <div>
              <h2 className="text-[45px] lg:text-[50px] leading-none mb-12 font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_1.5px_1.5px_rgba(0,0,255,0.75)]">
                Albumi
              </h2>
            </div>
          </motion.div>

          {/* Gallery Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {GalleryData?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 items-center justify-center h-[350px] w-full"
              >
                <div
                  className="group relative overflow-hidden border-2 border-white/50 rounded-sm h-[350px] w-full flex justify-center items-center"
                >
                  <div
                    onClick={() =>
                      navigate(`/gallery/${item.title}`, {
                        state: { item },
                      })
                    }
                    className="group-hover:bg-black/70 -bottom-full pb-5 group-hover:bottom-0 left-0 sm:pl-20 pl-0 text-center sm:text-start flex flex-col justify-end w-full h-full cursor-pointer absolute z-40 duration-300"
                  >
                    <div className="transition-all duration-500 z-50">
                      <span className="text-gradient text-3xl">
                        {item.title}
                      </span>
                    </div>
                    <div className="transition-all duration-700 z-50">
                      <span className="text-white">{item.category}</span>
                    </div>
                  </div>
                  <img
                    className="w-full object-center object-cover duration-500 h-full hover:scale-125"
                    loading="lazy"
                    decoding="async"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

Gallery.displayName = "Galerija";
export default Gallery;
