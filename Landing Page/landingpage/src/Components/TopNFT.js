import React from "react";
import OwlCarousel from "react-owl-carousel";
import Heading from "./Heading";

const TopNfts = [
  {
    id: "1",
    name: "Ultimate Detox",
    price: "Euro 7.95",
    image: "/images/UltimateDetox.jpg",
  },
  {
    id: "2",
    name: "Shield Immunity",
    price: "Euro 7.95",
    image: "/images/ShieldImmunity.jpg",
  },
  {
    id: "3",
    name: "Hydro Green",
    price: "Euro 7.95",
    image: "/images/HydroGreen.jpg",
  },
  {
    id: "4",
    name: "Happy Gut",
    price: "Euro 7.95",
    image: "/images/HappyGut.jpg",
  },
  {
    id: "5",
    name: "Drinkable Skincare",
    price: "Euro 7.95",
    image: "/images/DrinkableSkincare.jpg",
  },
  {
    id: "6",
    name: "Dr. Green",
    price: "Euro 7.95",
    image: "/images/Dr.Green.jpg",
  },
  {
    id: "7",
    name: "Coco Water",
    price: "Euro 7.95",
    image: "/images/CocoWater.jpg",
  },
];

function TopNFT() {
  return (
    <div className="my-12">
      <Heading title={"Top Products"} />
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay={true}
        autoplaySpeed={2000}
        smartSpeed={1000}
        autoplayTimeout={3000}
        responsive={{
          0: {
            margin: 2,
            items: 1,
          },
          640: {
            items: 2,
            margin: 10,
          },
          1024: {
            items: 3,
            margin: 20,
          },
          1536: {
            items: 4,
            margin: 30,
          },
        }}
      >
        {TopNfts.map((t) => (
          <div
            key={t.id}
            className="top-hover relative border-8 border-subLightMain pb-5 bg-subMain flex-colo"
          >
            <div className="relative w-full">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-64 object-cover"
              />
              <div className="top-hidden absolute transitione top-1 bottom-1 left-1 right-1 bg-overlay flex-colo">
                <h2 className="font-semibold text-whites">{t.name}</h2>
                <div className="mt-2 text-lg font-black tracking-wider text-whites">
                  {t.price}
                </div>
              </div>
            </div>

            <button className="px-6 text-whites tracking-wide py-3 mt-5 bt-linear font-bold text-sm rounded">
              Read More
            </button>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default TopNFT;
