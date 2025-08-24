import Slider from "rc-slider";
import "rc-slider/assets/index.css";

// Price slider component for selecting price range
export default function PriceSlider({ value, onChange, onApply }) {
  const priceLabels = ["$", "$$", "$$$", "$$$$", "$$$$$"];

  return (
    <div className="bg-white w-[200px] p-4 rounded shadow-md z-50">
      <Slider
        range
        min={1}
        max={5}
        value={value}
        onChange={onChange}
        marks={{
          1: "$",
          2: "$$",
          3: "$$$",
          4: "$$$$",
          5: "$$$$$",
        }}
        step={1}
      />
      <button
        className="mt-6 bg-[#333] text-white px-3 py-1 rounded"
        onClick={onApply}
      >
        Apply
      </button>
    </div>
  );
}
