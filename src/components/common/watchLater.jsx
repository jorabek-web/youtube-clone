import { CiMenuKebab } from "react-icons/ci";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { useState } from "react";

const watchlaterData = [
    {
      id: 1,
      title: "🔴 Live Now: 24/7 NASA Live Stream of Earth from Space (ISS)",
      description:
        "This is an ISS live earth view happening right now from space at the International Space Station. The International Space Station is 260",
      imgSrc: "/public/pngimg/image.png",
    },
    {
      id: 2,
      title: "🌎 Earth View from ISS: Stunning Space Walk Experience",
      description:
        "Experience the beauty of our planet from the International Space Station with live streams and astronaut insights.",
      imgSrc: "/public/pngimg/image.png",
    },
    {
      id: 3,
      title: "🚀 SpaceX Launch Live: Watch Falcon 9 Soar into Orbit",
      description:
        "Join us for a live broadcast of the latest SpaceX Falcon 9 launch as it carries satellites into orbit.",
      imgSrc: "/public/pngimg/image.png",
    },
  ];
  
  export const WatchLater = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    return (
      <div className="w-full h-full px-[100px] py-[20px] text-white">
        <div className="text-white text-[30px] my-[40px] flex items-center gap-[20px] relative">
          <button onClick={() => setIsModalOpen(!isModalOpen)} className="flex items-center gap-[10px]">
            <HiOutlineBars3BottomLeft /> Sort
          </button>
          {isModalOpen && (
            <div className="absolute top-[60px] left-0 bg-gray-800 text-white rounded-lg shadow-lg p-4 w-[200px]">
              <ul className="space-y-2">
                <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">Newest</div>
                <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">Oldest</div>
                <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">Most Popular</div>
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-[20px]">
          {watchlaterData.map((item) => (
            <div key={item.id} className="flex p-4 rounded-lg items-center">
              <img className="w-[400px] h-[200px] rounded-lg" src={item.imgSrc} alt="" />
              <div className="ml-4 flex-1">
                <div className="flex items-center gap-[20px] justify-between">
                  <h2 className="text-[30px] mx-[30px] flex-1">{item.title}</h2>
                  <CiMenuKebab className="text-[35px] cursor-pointer hover:bg-gray-700 rounded-full p-[5px] self-center" />
                </div>
                <h2 className="mx-[30px] my-[15px]">{item.description}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
