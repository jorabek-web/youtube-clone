import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="w-full h-full">
      <div className="  text-white">
        <div className="py-4">
          <div className="px-8 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/" className="flex items-center gap-[25px]">
              <svg
             
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20"
                  fill="#909090"
                />
              </svg>
              Home
            </Link>
          </div>
          <div className="px-8 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/history" className="flex items-center gap-[25px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9 3.75C7.35 3.75 3.67 7.45 3.67 12H0.919998L4.49 15.57L4.53 15.7L8.23 12H5.5C5.5 8.46 8.37 5.58 11.92 5.58C15.46 5.58 18.32 8.46 18.32 12C18.32 15.54 15.46 18.42 11.92 18.42C10.14 18.42 8.54 17.69 7.38 16.52L6.08 17.82C7.58 19.32 9.63 20.25 11.91 20.25C16.49 20.25 20.19 16.55 20.19 12C20.19 7.44 16.49 3.75 11.93 3.75H11.9ZM11 8.33V12.93L14.92 15.23L15.58 14.13L12.38 12.23V8.33H11Z"
                  fill="#909090"
                />
              </svg>
              History
            </Link>
          </div>
          <div className="px-8 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="#" className="flex items-center gap-[25px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0.669998C4.42 0.669998 0.669998 4.42 0.669998 9C0.669998 13.58 4.42 17.33 9 17.33C13.58 17.33 17.33 13.58 17.33 9C17.33 4.42 13.58 0.669998 9 0.669998ZM12.5 12.5L8.17 9.83V4.83H9.42V9.17L13.17 11.42L12.5 12.5Z"
                  fill="#909090"
                />
              </svg>
              Watch Later
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};
