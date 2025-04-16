"use client";
import { useControls } from "@/context/ControlsProvider";
import { useEffect, useState } from "react";
import { BiSolidGhost } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import {
  FaBrain,
  FaBug,
  FaDragon,
  FaLeaf,
  FaQuestion,
  FaSnowflake,
  FaStar,
} from "react-icons/fa";
import {
  GiFairyWand,
  GiLibertyWing,
  GiMetalBar,
  GiPoland,
  GiRoundBottomFlask,
  GiStoneSphere,
  GiWaterDrop,
} from "react-icons/gi";
import { MdDarkMode, MdElectricBolt, MdSportsMma } from "react-icons/md";
import { TbHexagonLetterN } from "react-icons/tb";

const typeIconsArray = [
  { type: "normal", icon: TbHexagonLetterN },
  { type: "fighting", icon: MdSportsMma },
  { type: "flying", icon: GiLibertyWing },
  { type: "poison", icon: GiRoundBottomFlask },
  { type: "ground", icon: GiPoland },
  { type: "rock", icon: GiStoneSphere },
  { type: "bug", icon: FaBug },
  { type: "ghost", icon: BiSolidGhost },
  { type: "steel", icon: GiMetalBar },
  { type: "fire", icon: BsFire },
  { type: "water", icon: GiWaterDrop },
  { type: "grass", icon: FaLeaf },
  { type: "electric", icon: MdElectricBolt },
  { type: "psychic", icon: FaBrain },
  { type: "ice", icon: FaSnowflake },
  { type: "dragon", icon: FaDragon },
  { type: "dark", icon: MdDarkMode },
  { type: "fairy", icon: GiFairyWand },
  { type: "stellar", icon: FaStar },
  { type: "unknown", icon: FaQuestion },
];

const Types = () => {
  const { setActions } = useControls();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const columns = 5;

  const handleDown = () => {
    setSelectedIndex((currentIndex) => {
      const newIndex = currentIndex + columns;
      const canMove = newIndex < typeIconsArray.length;
      return canMove ? newIndex : currentIndex;
    });
  };

  const handleUp = () => {
    setSelectedIndex((currentIndex) => {
      const newIndex = currentIndex - columns;
      const canMove = newIndex >= 0;
      return canMove ? newIndex : currentIndex;
    });
  };

  const handleRight = () => {
    setSelectedIndex((currentIndex) => {
      const isNotLastColumn = (currentIndex + 1) % columns !== 0;
      return isNotLastColumn ? currentIndex + 1 : currentIndex;
    });
  };

  const handleLeft = () => {
    setSelectedIndex((currentIndex) => {
      const isNotFirstColumn = currentIndex % columns !== 0;
      return isNotFirstColumn ? currentIndex - 1 : currentIndex;
    });
  };

  useEffect(() => {
    setActions({
      onDown: handleDown,
      onUp: handleUp,
      onRight: handleRight,
      onLeft: handleLeft,
    });
  }, [setActions]);
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
      <span className="uppercase text-xs">selecciona la categoría</span>
      <div className="grid grid-cols-5 w-full content-center gap-1">
        {typeIconsArray.map(({ icon: Icon, type }, index) => (
          <div
            className=" flex items-center justify-center relative"
            key={type}
          >
            <div
              className={`w-10 h-10 flex justify-center items-center bg-gray-200 rounded-sm  ${
                selectedIndex === index && "border-2 border-black"
              }`}
            >
              <Icon
                className={`h-8 w-8  ${
                  selectedIndex === index ? "text-black" : "text-primary"
                }`}
              />
            </div>
            <span
              className={`absolute text-[8px] p-[2px] bg-black rounded full w-fit text-white top-1 -right-1 ${
                selectedIndex === index ? "block" : "hidden"
              }`}
            >
              {type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Types;
