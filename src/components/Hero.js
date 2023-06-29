import React from "react";
import commerce from "../assets/commerce.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-yellow-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/*text*/}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex-items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div> New Trend
            <div className="flex flex-col">
              <h1 className="text-[70px] leading-[1.1] font-light mb-4">
                WINTER SALE <br />
                <span className="font-semibold">MENS</span>
              </h1>
              <Link
                to={"/"}
                className="self-start uppercase font-semidold border-b-2 border-primary"
              >
                Discover more
              </Link>
            </div>
          </div>
        </div>
        {/*image*/}
        <div className="hidden lg:block">
          <img src={commerce} alt="/" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
