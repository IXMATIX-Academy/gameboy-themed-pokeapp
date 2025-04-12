import { FC, ReactNode } from "react";

interface DisplayProps {
  children: ReactNode;
}
const Display: FC<DisplayProps> = ({ children }) => {
  return (
    <div className="bg-black h-80 px-5 py-2 rounded-2xl flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <div className="h-2 w-2 bg-red-500 rounded-full border border-white"></div>
        <span className="text-white text-[10px] italic uppercase">battery</span>
      </div>
      <div className="bg-white h-full flex justify-center items-center">
        {children}
      </div>
      <span className="text-white italic uppercase">game boy</span>
    </div>
  );
};
export default Display;
