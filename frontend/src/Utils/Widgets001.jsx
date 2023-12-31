// Mini Components to support the feature cards

export const CountDown = () => {
  return <div className="text-xl sm:text-base">00 : 02 : 18 : 48</div>;
};

export const StartPrice = () => {
  return (
    <div>
      <p className="text-white text-xl sm:text-xs">
        Starting at <span className="text-yellow-500 font-bold">N7,350</span>
      </p>
    </div>
  );
};

export const DiscountOff = () => {
  return (
    <div>
      <p className="text-xl sm:text-xs">
        Up to{" "}
        <span className="p-1 rounded-md bg-slate-700 text-white font-bold">
          64% OFF
        </span>
      </p>
    </div>
  );
};
