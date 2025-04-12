import { FC, ReactNode } from "react";
import Display from "./Display";

import Controls from "./Controls";

interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="w-full h-6 flex justify-center">
        <div className="h-6 border-4 rounded-t-0 border-black w-11/12 rounded-bl-2xl rounded-br-2xl flex justify-center">
          <div className="h-full border-4 rounded-t-0 border-b-0 border-t-0 border-black w-1/2 rounded-bl-2xl rounded-br-2xl flex justify-center items-center">
            <div className="h-1 w-1/5 border-2"></div>
          </div>
        </div>
      </div>

      <Display>{children}</Display>
      <Controls />
    </>
  );
};
export default Layout;
