// import React from "react";
// import { motion } from "framer-motion";
// import Slider from "react-slick"; // Import react-slick
// import { fadeIn } from "../variants";

// // Import slick-carousel CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // img
// import Img1 from "../assets/logo1.png";
// import Img2 from "../assets/logo2.png";
// import Img3 from "../assets/logo3.jpg";
// import Img4 from "../assets/logo4.png";

// // icons
// import { FaInstagram, FaFacebook } from "react-icons/fa";

// const Partnership = () => {
//   // Settings for the slick carousel
//   const settings = {
//     dots: true,
//     infinite: true, // Infinite looping
//     speed: 1300, // Faster transition speed (in milliseconds)
//     slidesToShow: 2, // Show 2 slides at once
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 1500, // Adjust autoplay speed
//     arrows: false,
//     centerMode: true, // Center the current slide
//     centerPadding: "30px", // Add padding to the sides of the center slide
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2, // Show 1 slide on medium screens
//           centerPadding: "20px", // Adjust padding for smaller screens
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1, // Show 1 slide on small screens
//           centerPadding: "10px", // Adjust padding for small screens
//         },
//       },
//     ],
//   };

//   return (
//     <section
//       className="py-16 lg:section bg-site bg-no-repeat bg-cover"
//       id="partnership"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           {/* text */}
//           <motion.div
//             variants={fadeIn("right", 0.3)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 flex sm:justify-start justify-center items-center"
//           >
//             <div>
//               <h4 className="text-4xl text-center sm:text-left uppercase text-purple-500 font-medium mb-2 tracking-wide">
//                 Sodelovanja
//               </h4>
//               <h2 className="text-[45px] text-center sm:text-left lg:text-[50px] leading-none sm:mb-12 mb-7">
//                 in reference: <br />
//               </h2>
//             </div>
//           </motion.div>
//         </div>

//         {/* Carousel */}
//         <motion.div
//           variants={fadeIn("left", 0.3)}
//           initial="hidden"
//           whileInView={"show"}
//           viewport={{ once: false, amount: 0.3 }}
//           className="sm:mt-12 mt-0"
//         >
//           <Slider {...settings}>
//             <div className="size-32">
//               <img
//                 src={Img1}
//                 alt=""
//                 className="bg-transparent size-32  object-contain"
//               />
//             </div>
//             <div className="size-32">
//               <img
//                 src={Img2}
//                 alt=""
//                 className="bg-transparent size-32  object-contain"
//               />
//             </div>
//             <div className="size-32">
//               <img
//                 src={Img3}
//                 alt=""
//                 className="bg-transparent size-32  object-contain"
//               />
//             </div>
//             <div className="size-32">
//               <img
//                 src={Img4}
//                 alt=""
//                 className="bg-transparent size-32  object-contain"
//               />
//             </div>
//           </Slider>
//         </motion.div>

//         {/* Footer */}

//         <footer className="mt-20 text-center bg-white-500 text-white pb-16">
//           <div className="container mx-auto flex flex-col items-center">
//             <p className="text-xl mb-4 text-4x1">&copy;2024 Domen Mlakar</p>
//             <a
//               href="#"
//               className="text-purple-500 hover:text-purple-300 transition-colors text-xl mb-4"
//             >
//               Pogoji poslovanja
//             </a>
//             <div className="flex gap-x-6 text-3xl">
//               <a
//                 href="https://www.instagram.com/domen_mlakar/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white-500 hover:text-purple-300 transition-colors"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://www.facebook.com/domenm2"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white-500 hover:text-purple-300 transition-colors"
//               >
//                 <FaFacebook />
//               </a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </section>
//   );
// };

// export default Partnership;
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { fadeIn } from "../variants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import Img1 from "../assets/logo1.png";
import Img2 from "../assets/logo2.png";
import Img3 from "../assets/logo3.jpg";
import Img4 from "../assets/logo4.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// Icons
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Partnership = () => {
  const brands = [
    {
      src: "/Brands/b1.webp",
      style: "size-32",
    },
    {
      src: "/Brands/b2.webp",
      style: "w-8/12 h-32",
    },
    // {
    //   src: "/Brands/b3.webp",
    //   style: "size-32"
    // },
    {
      src: "/Brands/b4.webp",
      style: "size-32",
    },
    {
      src: "/Brands/b5.webp",
      style: "size-32",
    },
    {
      src: "/Brands/b6.webp",
      style: "size-32",
    },
    {
      src: "/Brands/b7.png",
      style: "size-32",
    },
    {
      src: "/Brands/b8.png",
      style: "size-32",
    },
    {
      src: "/Brands/b9.jpg",
      style: "size-32",
    },
    {
      src: "/Brands/b100.png",
      style: "size-32",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <section
      className="py-16 lg:section bg-site bg-no-repeat bg-cover"
      id="partnership"
    >
      <div className="w-11/12 max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex sm:justify-start justify-center items-center"
          >
            <div>
              <h4 className="text-4xl text-center sm:text-left uppercase text-purple-500 font-medium mb-2 tracking-wide">
                Sodelovanja
              </h4>
              <h2 className="text-[45px] text-center sm:text-left lg:text-[50px] leading-none sm:mb-12 mb-7">
                in reference: <br />
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="sm:mt-12 mt-0"
        >
          <Swiper
            className="mySwiper w-full"
            loop={true}
            slidesPerView={4}
            spaceBetween={10}
            autoplay={true}
            speed={1300}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              100: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {brands?.map((item, ind) => {
              return (
                <SwiperSlide
                  key={ind}
                  className="flex justify-center items-center text-center"
                >
                  <img
                    src={item.src}
                    alt="Logo 3"
                    className={`${item.style} mt-4 object-contain`}
                  />
                </SwiperSlide>
              );
            })}

            {/* <SwiperSlide className="flex justify-center items-center text-center">
              {" "}
              <img src={Img2} alt="Logo 3" className="size-32 object-contain" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center text-center">
              {" "}
              <img src={Img3} alt="Logo 3" className="size-32 object-contain" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center text-center ">
              {" "}
              <img
                src={Img4}
                alt="Logo 4"
                className="sm:w-52 w-9/12 h-32 object-contain"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center text-center">
              <img
                src={Img1}
                alt="Logo 3"
                className="mt-4 size-32 object-contain"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center text-center">
              {" "}
              <img src={Img2} alt="Logo 3" className="size-32 object-contain" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center text-center">
              {" "}
              <img src={Img3} alt="Logo 3" className="size-32 object-contain" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center text-center ">
              {" "}
              <img
                src={Img4}
                alt="Logo 4"
                className="sm:w-52 w-9/12 h-32  object-contain"
              />
            </SwiperSlide> */}
          </Swiper>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 text-center bg-white-500 text-white pb-16">
          <div className="container mx-auto flex flex-col items-center">
            <p className="text-xl mb-4 text-4x1">
              &copy;{new Date().getFullYear()} Domen Mlakar
            </p>
            <p>
            info@domenmlakar.si
            </p>
            <Link
              to="/privacy-policy"
              className="text-purple-500 hover:text-purple-300 transition-colors text-xl mb-4"
            >
              Pogoji poslovanja
            </Link>
            <div className="flex gap-x-6 text-3xl">
              <a
                href="https://www.instagram.com/domen_mlakar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-500 hover:text-purple-300 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/domenm2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-500 hover:text-purple-300 transition-colors"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Partnership;
