import { CiMenuKebab } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";

const historyData = [
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

export const History = () => {
  return (
    <div className="w-full h-full px-[100px] py-[20px] text-white">
      <h2 className="text-white text-[50px] my-[40px]">Watch history</h2>
      <div className="flex flex-col gap-[20px]">
        {historyData.map((item) => (
          <div key={item.id} className="flex  p-4 rounded-lg">
            <img className="w-[500px] h-[200px] rounded-lg" src={item.imgSrc} alt="" />
            <div className="ml-4">
              <div className="flex items-start gap-[20px]">
                <h2 className="text-[30px] mx-[30px]">{item.title}</h2>
                <FaXmark className="text-[35px] cursor-pointer mx-[10px] hover:bg-gray-700 rounded-4xl p-[5px]" />
                <CiMenuKebab className="text-[35px] cursor-pointer hover:bg-gray-700 rounded-4xl p-[5px]" />
              </div>
              <h2 className="mx-[30px] my-[15px]">{item.description}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
