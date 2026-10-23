import { memo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CategoriesData from "../../Data/CategoriesData"; // Import CategoriesData
import logo from "../../assets/domen-logo.png";
import { Link, useParams } from "react-router-dom";

const Categories = memo(() => {
  const [open, setOpen] = useState(false); // Lightbox open state
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  const [visibleImages, setVisibleImages] = useState(20); // Initial number of images to display

  // Extract the category from URL
  const { category } = useParams();
  const formattedCategory = decodeURIComponent(category); // Handle %20 in URL

  // Define filtering logic for Fotografiranje category
  let galleryItems;

  if (formattedCategory === "Fotografiranje") {
    // If the selected category is Fotografiranje, filter out Fotografiranje and Snemanje
    galleryItems = Object.keys(CategoriesData)
      .filter((key) => key !== "Fotografiranje" && key !== "Snemanje")
      .reduce((acc, key) => [...acc, ...CategoriesData[key]], []);
  } else {
    // For all other categories, show only the relevant category data
    galleryItems = CategoriesData[formattedCategory] || [];
  }

  // Create an array of image objects for Lightbox
  const slides = galleryItems.map((item) => ({
    src: item.imgLarge || item.img,
    alt: item.title,
  }));

  // Open the lightbox at the clicked image's index
  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  // Function to load more images
  const handleLoadMore = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 20); // Increase number of visible images by 20
  };

  return (
    <>
      <section className="pb-16 bg-black bg-no-repeat bg-cover" id="gallery">
        <div className="w-11/12 max-w-[1300px]  mx-auto pt-8">
          {/* <div className="bg-green-300 w-full"> */}
          <Link to={`/`}>
            <img src={logo} alt="Logo" className="md:size-32 size-20 mb-6" />
          </Link>
          {/* </div> */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
            className="text-center"
          >
            <div>
              <h2 className="text-[35px] lg:text-[50px] leading-none mb-12 font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_1.5px_1.5px_rgba(0,0,255,0.75)]">
                {formattedCategory}
              </h2>
            </div>
          </motion.div>
          <div className="flex flex-wrap gap-10 justify-center">
            {galleryItems.slice(0, visibleImages).map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-x-10 items-center justify-between h-[350px] md:w-[400px] w-11/12"
                onClick={() => handleImageClick(index)}
              >
                <div
                  className={`mt-[7px] sm:mt-[20px] group relative overflow-hidden border-2 border-white/50 rounded-sm h-[350px] md:w-[400px] w-full flex justify-center items-center cursor-pointer`}
                >
                  <picture className="w-full h-full">
                    <img
                      className="w-full object-center object-cover duration-500 h-full hover:scale-125"
                      loading="lazy"
                      decoding="async"
                      src={item.imgLarge || item.img}
                      alt={item.title}
                    />
                  </picture>
                </div>
              </div>
            ))}
          </div>

          {/* "Load More" button: only display if there are more images to load */}
          {visibleImages < galleryItems.length && (
            <div className="text-center mt-10">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Naloži več
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Component */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)} // Close the lightbox
          index={currentIndex} // Start at the clicked image
          slides={slides} // Pass the array of slides
        />
      )}
    </>
  );
});

Categories.displayName = "Categories";
export default Categories;
