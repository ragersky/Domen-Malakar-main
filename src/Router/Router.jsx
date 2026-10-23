// components
import { Routes, Route } from "react-router-dom";
import Kontakt from "../Pages/Kontakt/Kontakt";
import Gallery from "../Pages/Gallery/Gallery";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Privacy from "../Pages/Privacy/Privacy";
import Cenik from "../Pages/Cenik/Cenik";
import Video from "../Pages/Video/Video";  // event videiji

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:category" element={<Categories />} />
        <Route path="*" element={<Error />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/cenik" element={<Cenik />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/dogodki videos" element={<Video />} />
      </Routes>
    </>
  );
};

export default Router;
