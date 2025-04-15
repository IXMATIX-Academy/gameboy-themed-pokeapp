import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from "react-icons/fa";
import ArrowButton from "./ArrowButton";
import CircleButton from "./CircleButton";

const buttons = [
  {
    id: "up",
    className: "top-0 border-b-0 ",
    icon: FaAngleUp,
  },
  {
    id: "down",
    className: "bottom-0 border-t-0",
    icon: FaAngleDown,
  },
  {
    id: "left",
    className: "left-0 border-r-0",
    icon: FaAngleLeft,
  },
  {
    id: "right",
    className: "right-0 border-l-0",
    icon: FaAngleRight,
  },
];

const circleButtons = [
  {
    id: "a",
    classButton: "bg-yellow-500",
    classContainer: "-translate-y-6",
    textButton: "A",
  },
  {
    id: "b",
    classButton: "bg-primary",
    classContainer: "translate-y-6",
    textButton: "B",
  },
];
const Controls = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="relative flex items-center w-40 h-40 justify-center">
        <div className="bg-blue-pokemon h-32 w-32 rounded-full border-4 absolute" />

        {buttons.map(({ id, icon: Icon, className }) => (
          <ArrowButton key={id} className={className}>
            <Icon className="w-8 h-8" />
          </ArrowButton>
        ))}

        <div className="bg-white w-16 h-16 absolute"></div>
        <div className="absolute w-10 h-10 rounded-full border-4"></div>
      </div>

      <div className="flex flex-row-reverse gap-4">
        {circleButtons.map(
          ({ id, classButton, classContainer, textButton }) => (
            <CircleButton
              key={id}
              classButton={classButton}
              classContainer={classContainer}
              textButton={textButton}
            />
          )
        )}
      </div>
    </div>
  );
};
export default Controls;
