import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaDollarSign } from "react-icons/fa";

// Price slider component for selecting price range
export default function PriceSlider({ value, onChange, onApply }) {
  const priceLabels = [
    { value: 1, label: "$", desc: "Budget" },
    { value: 2, label: "$$", desc: "Moderate" },
    { value: 3, label: "$$$", desc: "Pricey" },
    { value: 4, label: "$$$$", desc: "Upscale" },
    { value: 5, label: "$$$$$", desc: "Luxury" },
  ];

  // Get the selected range description
  const getSelectedRange = () => {
    const min = value[0];
    const max = value[1];
    if (min === max) {
      return priceLabels[min - 1].label;
    }
    return `${priceLabels[min - 1].label} - ${priceLabels[max - 1].label}`;
  };

  return (
    <div className="bg-white w-[320px] rounded-2xl shadow-2xl border border-gray-100 z-[1050] overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-4">
        <div className="flex items-center gap-2">
          <FaDollarSign className="text-white text-xl" />
          <h3 className="text-white font-bold text-lg">Price Range</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Selected Range Display */}
        <div className="text-center py-3 bg-emerald-50 rounded-xl border border-emerald-200">
          <p className="text-xs text-emerald-600 font-medium mb-1">Selected Range</p>
          <p className="text-2xl font-bold text-emerald-700">{getSelectedRange()}</p>
        </div>

        {/* Slider */}
        <div className="px-2 pt-2 pb-8">
          <Slider
            range
            min={1}
            max={5}
            value={value}
            onChange={onChange}
            step={1}
            trackStyle={[{ backgroundColor: "#10b981", height: 6 }]}
            handleStyle={[
              {
                backgroundColor: "#059669",
                border: "3px solid white",
                boxShadow: "0 2px 8px rgba(5, 150, 105, 0.4)",
                width: 20,
                height: 20,
                marginTop: -7,
                cursor: "pointer",
              },
              {
                backgroundColor: "#059669",
                border: "3px solid white",
                boxShadow: "0 2px 8px rgba(5, 150, 105, 0.4)",
                width: 20,
                height: 20,
                marginTop: -7,
                cursor: "pointer",
              },
            ]}
            railStyle={{ backgroundColor: "#e5e7eb", height: 6, cursor: "pointer" }}
            dotStyle={{
              backgroundColor: "#d1d5db",
              border: "2px solid white",
              width: 12,
              height: 12,
              bottom: -3,
              cursor: "pointer",
            }}
            activeDotStyle={{
              backgroundColor: "#10b981",
              border: "2px solid white",
              cursor: "pointer",
            }}
          />
        </div>

        {/* Price Labels */}
        <div className="grid grid-cols-5 gap-1 text-center">
          {priceLabels.map((item) => (
            <div
              key={item.value}
              className={`py-2 px-1 rounded-lg transition-all duration-200 ${value[0] <= item.value && value[1] >= item.value
                  ? "bg-emerald-100 text-emerald-700 font-semibold"
                  : "text-gray-400"
                }`}
            >
              <div className="text-sm font-bold">{item.label}</div>
              <div className="text-[10px] mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Apply Button */}
        <button
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          onClick={onApply}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}
