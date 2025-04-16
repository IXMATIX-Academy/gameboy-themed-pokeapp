"use client";
import { useControls } from "@/context/ControlsProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const { push } = useRouter();
  const { setActions } = useControls();

  useEffect(() => {
    setActions({
      onAccepted: () => push("/types"),
    });
  }, [push, setActions]);
  return (
    <div className="font-jersey text-4xl uppercase flex flex-col gap-4">
      <span className="text-center">
        Team <br /> builder
      </span>
      <span className="font-jaro text-5xl text-yellow-400">Pokemon</span>

      <button className="bg-primary p-1 pixel">
        <div className="bg-black text-yellow-400 uppercase text-3xl">
          iniciar
        </div>
      </button>
    </div>
  );
};
export default Home;
