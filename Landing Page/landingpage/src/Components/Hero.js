import React from "react";
import CountDown from "./CountFunction";

function Hero() {
  return (
    <div className="lg:grid grid-cols-2 gap-3 items-center">
      <div className="col-span-1 py-12 lg:py-0">
        <h1 className="2xl:text-5xl lg:text-4xl sm:text-5xl text-4xl leading-snug 2xl:leading-snug sm:leading-snug lg:leading-snug font-head text-whites tracking-wide">
          100% Organic, certified by Soil Association <br />
          <span className="text-pink">cold pressed </span>
          <span className="text-blue"> unpasteurised, no HPP</span>
        </h1>
        <p className="font-medium text-lightBlack mt-3">
                                          <b>IS THE WHITE SEDIMENT IN MY BOTTLE NORMAL?</b> "<br/>"
        Yes ! The white sediment is the gingerol ginger's bioactive compound. You will find it in the Ultimate Detox, Dr. Green, Happy Gut and Shield Immunity.
        It is super good for you, so shake the bottle well.
        </p>
        <div className="flex-colo w-full sm:w-3/5 border border-whites py-6 px-6 bg-subMain rounded mt-10">
          <h2 className="italic font-semibold text-blue">
            Product drop coming soon!!
          </h2>
          <CountDown />
        </div>
      </div>
      <div className="hero lg:block hidden">
        <img
          src="/images/main2.jpeg"
          alt="Main"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
