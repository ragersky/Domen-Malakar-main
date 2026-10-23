import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Link } from "react-router-dom";

import logo from "../../assets/domen-logo.png";
import PricingCards from "../../components/PricingCards";
import PricingPlanTitle from "../../components/PricingPlanTitle";
const Pricing = () => {
  return (
    <div className="pb-16 bg-black min-h-screen">
      <div className=" w-11/12 max-w-[1300px]  mx-auto pt-8">
        <div className="w-full flex justify-start">
          <Link to={`/`}>
            <img src={logo} alt="Logo" className="md:size-32 size-20" />
          </Link>
        </div>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="text-center"
        >
          <div>
            <h2 className="text-[35px] lg:text-[50px] leading-none mb-12 font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_1.5px_1.5px_rgba(0,0,255,0.75)]">
              Cenik
            </h2>
          </div>
          <div className="w-full mb-16">
            
  <PricingPlanTitle
    planTitle="POROČNA FOTOGRAFIJA"   // Poročna fotografija cenik
    planDescription="Če med paketi ne najdete prave ponudbe za vas, nas kontaktirajte in z veseljem
    vam pripravimo ponudbo glede na vaše želje."
  />
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
    <PricingCards
      title="Do 4 ure"
      isHighlighted={false}
      packageDetails={[
        "1 ali 2 fotografa",
        "Do 4 ure",
        "150+ fotografij",
        "Fotografije na spletnem linku",
        
      ].map((detail, index, arr) => (
        <div key={index} className="flex flex-col">
          <span>{detail}</span>
          {index < arr.length - 1 && <hr className="border-t border-gray-300 my-2" />}
        </div>
      ))}
    />
    <PricingCards
      title="Celodnevno"
      isHighlighted={true}
      packageDetails={[
        "1 ali 2 fotografa",
        "Do 14 ur",
        "400+ fotografij",
        "Fotografije na spletnem linku",
      ].map((detail, index, arr) => (
        <div key={index} className="flex flex-col">
          <span>{detail}</span>
          {index < arr.length - 1 && <hr className="border-t border-gray-300 my-2" />}
        </div>
      ))}
    />
    <PricingCards
      title="All inclusive Foto"
      isHighlighted={false}
      packageDetails={[
        "2 fotografa",
        "Do 14 ur",
        "600+ fotografij",
        "Spominski USB",
        "Fotoknjiga",
        "Fotografije na spletnem linku"
      ].map((detail, index, arr) => (
        <div key={index} className="flex flex-col">
          <span>{detail}</span>
          {index < arr.length - 1 && <hr className="border-t border-gray-300 my-2" />}
        </div>
      ))}
    />
  </div>
</div>
<div className="w-full mb-16">
  <PricingPlanTitle
    planTitle="POROČNI VIDEO"   // Poročni video cenik
    planDescription="Če med paketi ne najdete prave ponudbe"
  />
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
    <PricingCards
      title="Do 4 ure"
      isHighlighted={false}
      packageDetails={[
        "1 snemalec",
        "Do 4 ure",
        "Snemanje z dronom",
        "Dodatni snemalec 150€",
      ].map((detail, index, arr) => (
        <div key={index} className="flex flex-col">
          <span>{detail}</span>
          {index < arr.length - 1 && <hr className="border-t border-gray-300 my-2" />}
        </div>
      ))}
    />
    <PricingCards
      title="Celodnevno"
      isHighlighted={true}
      packageDetails={[
        "1 ali 2 snemalca",
        "Do 14 ur",
        "Poročni video 5-8 minut",
        "Snemanje zvoka",
      ].map((detail, index, arr) => (
        <div key={index} className="flex flex-col">
          <span>{detail}</span>
          {index < arr.length - 1 && <hr className="border-t border-gray-300 my-2" />}
        </div>
      ))}
    />
    <PricingCards
      title="All inclusive Video"
      isHighlighted={false}
      packageDetails={[
        "2 snemalca",
        "Do 14 ur",
        "Spominski USB",
        "Highlight video (3-5 min)",
        "Daljši video (Do 2 uri)",
        "Snemanje z dronom",
        ""
      ].map((detail, index, arr) => (
        <div key={index} className="flex flex-col">
          <span>{detail}</span>
          {index < arr.length - 1 && <hr className="border-t border-gray-300 my-2" />}
        </div>
      ))}
    />
  </div>
</div>
<div className="w-full mb-16">
  <PricingPlanTitle
    planTitle="POROČNA FOTOGRAFIJA + VIDEO"  // Foto + video paketi
    planDescription="Paketi, ki vključujejo tako fotografiranje, kot video so naša najbolj priljubljena in najugodnejša rešitev za popoln poročni dan. Kontaktirajte nas za cene in več informacij!"
  />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
            <PricingCards  
              title="Basic"
              isHighlighted={false}
              packageDetails={[
                "Fotograf + snemalec",
                "Do 4 ure prisotnosti",
                "Civilni/cerkveni obred + fotoshooting",
                "150+ fotografij",
                "Poročni film",
                "Fotografije/video na spletnem linku",
                "Možnost dodatnih snemalcev/fotografov",
                ""

              ].map((detail, index, arr) => (
                <div key={index} className="flex flex-col">
                  <span>{detail}</span>
                  {index < arr.length - 1 && <hr className="border-t border-gray-300 my-2" />}
                </div>
              ))}
            />
            <PricingCards
              title="Premium"
              isHighlighted={true}
              packageDetails={[
                "Fotograf + snemalec",
                "Do 14 ur",
                "Od priprav do torte/ po dogovoru",
                "400+ fotografij",
                "Poročni film",
                "Fotografije/video na spletnem linku",
                "Možnost dodatnih fotografov in snemalcev",
                ""

              ].map((detail, index, arr) => (
                <div key={index} className="flex flex-col">
                  <span>{detail}</span>
                  {index < arr.length - 1 && <hr className="border-t border-gray-300 my-2" />}
                </div>
              ))}
    />
    <PricingCards
      title="All inclusive"
      isHighlighted={false}
      packageDetails={[
        "2 fotografa + snemalca",
        "Do 14 ur",
        "Od priprav do torte/ po dogovoru",
        "600+ fotografij",
        "Poročni film",
        "Fotoknjiga",
        "Spominski USB",
        "Fotografije/video na spletnem linku",
        "Možnost dodatnih snemalcev in fotografov",
        ""
      ].map((detail, index, arr) => (
        <div key={index} className="flex flex-col">
          <span>{detail}</span>
          {index < arr.length - 1 && <hr className="border-t border-gray-300 my-2" />}
        </div>
      ))}
    />
  </div>
</div>
          {/* Last Card */}
          <div className={`border rounded-lg p-8 flex flex-col h-full w-full`}>
            <h2 className="text-2xl font-serif text-center mb-8">
              OSTALA PONUDBA
            </h2>
            <div className="space-y-4 flex-grow">
              {[
                "Paketi po meri",
                "Fotoknjiga (300-700€)",
                "Tiskanje zahvalnih fotografij (od 100€, možno samo v paketu kjer sta vsaj 2 fotografa)",
                "Personaliziran spominski USB v leseni spominski škatlici (20-35€)",
                "Photobooth (foto kotiček) (250 – 450€)",
                "Kontaktirajte nas in pripravili bomo ponudbo posebej za vas.",
              ].map((detail, index) => (
                <p key={index} className={`text-center pb-4 text-lg`}>
                  {detail}
                </p>
              ))}
            </div>

            <Link to="/kontakt" className="mt-6">
              <button className="btn btn-sm hover:text-white duration-300">
                <span>KONTAKT</span>
              </button>
            </Link>
          </div>
        </motion.div>
        <a
          href="DomenMlakarCenik.pdf"
          download
          className="mt-10 flex justify-center"
        >
          
          <button className="btn btn-sm hover:text-white duration-300">
            
            <span>Prenesi Cenik</span>
  
          </button>
        </a>
        
      </div>
    </div>
  );
};

export default Pricing;
