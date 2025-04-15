const points = new Array(12).fill(null);
const lines = new Array(6).fill(null);
const Decorations = () => {
  return (
    <div className="w-full flex absolute left-0 bottom-4 px-5 justify-between items-center">
      <div className="grid grid-cols-4 gap-2 h-10 content-center w-16 ">
        {points.map((_, index) => (
          <div
            key={index}
            className="bg-white/10 w-2 h-2 rounded-full flex items-center justify-center"
          >
            <div className="bg-primary-dark/50 w-1 h-1 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 h-16 content-center w-24 ">
        {lines.map((_, index) => (
          <div
            key={index}
            className="bg-linear-to-b from-primary-dark/5 to-white/10 w-10 rounded-full flex items-center justify-center"
          ></div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 h-10 content-center w-16 ">
        {points.map((_, index) => (
          <div
            key={index}
            className="bg-white/10 w-2 h-2 rounded-full flex items-center justify-center"
          >
            <div className="bg-primary-dark/50 w-1 h-1 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Decorations;
