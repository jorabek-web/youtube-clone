// import { useState } from "react";

// const categories = [
//   "All",
//   "Gaming",
//   "PUBG MOBILE LITE",
//   "Live",
//   "Esports",
//   "Music",
//   "Battlegrounds Mobile India",
//   "Mixes",
//   "Portable communication devices",
//   "Grand Theft Auto: San Andreas",
// ];

// export default function Filter() {
//   const [carusel, setCarusel] = useState("All");

//   return (
//     <div className="w-full overflow-x-auto no-scrollbar bg-white py-2">
//       <div className="flex space-x-2 px-4">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 whitespace-nowrap rounded-lg text-sm font-medium transition ${
//               carusel === category
//                 ? "bg-black text-white"
//                 : "bg-gray-200 text-black hover:bg-gray-300"
//             }`}
//             onClick={() => setCarusel(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
