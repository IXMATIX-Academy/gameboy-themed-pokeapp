import { twMerge } from "tailwind-merge";
import Curve from "./Curve";
import { FC } from "react";

interface CircleButtonProps {
  classContainer: string;
  classButton?: string;
  textButton: string;
}

const CircleButton: FC<CircleButtonProps> = ({
  classButton,
  textButton,
  classContainer,
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center relative gap-2",
        classContainer
      )}
    >
      <div className="h-14 w-14 bg-black rounded-full absolute bottom-8 left-1"></div>
      <button
        className={twMerge(
          "w-14 h-14 rounded-full border-4 relative active:scale-110",
          classButton
        )}
      >
        <Curve className="stroke-white rotate-12" />
      </button>
      <span className="text-white text-xl font-bold">{textButton}</span>
    </div>
  );
};
export default CircleButton;
