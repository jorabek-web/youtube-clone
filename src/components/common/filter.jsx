import { useState } from "react";

const categories = [
  "All",
  "Gaming",
  "PUBG MOBILE LITE",
  "Live",
  "Esports",
  "Music",
  "Battlegrounds Mobile India",
  "Mixes",
  "Portable communication devices",
  "Grand Theft Auto: San Andreas",
];

export function Filter() {
  const [carusel, setCarusel] = useState("All");

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2 pl-6">
      <div className="flex space-x-2 px-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 whitespace-nowrap rounded-lg text-sm font-medium transition ${
              carusel === category
                ? "bg-[#1a1919] hover:bg-[#444343] text-white"
                : "bg-[#333333] text-white hover:bg-[#444343]"
            }`}
            onClick={() => setCarusel(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
