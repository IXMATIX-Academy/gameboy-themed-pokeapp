import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from "react-icons/fa";
import ArrowButton from "./ArrowButton";

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
const Controls = () => {
  return (
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
  );
};
export default Controls;
