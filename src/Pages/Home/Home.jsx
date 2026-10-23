import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import About from "../../components/About";
import Work from "../../components/Work";
import Partnership from "../../components/Partnership";

const Home = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      {/* <Services /> */}
      <Work />
      <Partnership />
      {/* <Contact /> */}

      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default Home;
