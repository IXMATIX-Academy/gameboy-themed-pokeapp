import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const ArrowButton: FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        "bg-white w-16 h-16 border-4 rounded-xl absolute flex justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export default ArrowButton;
