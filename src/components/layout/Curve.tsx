import * as React from "react";
import { SVGProps } from "react";
const Curve = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" {...props}>
    <path
      fill="none"
      strokeLinecap="round"
      strokeWidth={9}
      d="M30.465 21.246c17.597-9.039 32.14-5.488 43.629 10.648"
    />
  </svg>
);
export default Curve;
