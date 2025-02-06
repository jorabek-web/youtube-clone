

export const Navbar = () => {
    return (
        <div className="w-full h-[60px] flex items-center justify-between  px-4 border-b border-white">
            <div>
                <div className="flex gap-10 ml-5">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#909090" />
                    </svg>

                    <svg width="107" height="24" viewBox="0 0 107 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.4 5.12C33.06 3.88 32.09 2.92 30.85 2.6C28.62 2 19.68 2 19.68 2C19.68 2 10.75 2 8.52 2.6C7.29 2.93 6.33 3.89 6 5.12C5.59 7.39 5.39 9.69 5.4 12C5.39 14.31 5.59 16.61 6 18.88C6.33 20.11 7.29 21.07 8.52 21.4C10.75 22 19.68 22 19.68 22C19.68 22 28.61 22 30.84 21.4C32.08 21.08 33.06 20.12 33.4 18.88C33.81 16.61 34.01 14.31 34 12C34.01 9.69 33.81 7.39 33.4 5.12Z" fill="#FF0000" />
                        <path d="M16.83 16.29L24.25 12L16.83 7.71002V16.29Z" fill="white" />
                        <path d="M46.67 8.35004V9.00004C46.67 12.45 45.14 14.48 41.79 14.48H41.28V20.48H38.54V3.42004H42.03C45.22 3.42004 46.67 4.77004 46.67 8.35004ZM43.79 8.60004C43.79 6.11004 43.34 5.51004 41.79 5.51004H41.28V12.51H41.75C43.22 12.51 43.75 11.45 43.75 9.14004L43.79 8.60004Z" fill="white" />
                        <path d="M53.14 7.83002L53 11.08C51.83 10.84 50.87 11 50.4 11.77V20.55H47.73V8.00002H49.9L50.14 10.71H50.24C50.52 8.71002 51.44 7.71002 52.63 7.71002C52.8 7.73002 52.98 7.77002 53.14 7.83002Z" fill="white" />
                        <path d="M56.27 15.25V15.88C56.27 18.09 56.39 18.88 57.33 18.88C58.27 18.88 58.43 18.19 58.45 16.76L60.88 16.9C61.06 19.6 59.65 20.8 57.27 20.8C54.37 20.8 53.51 18.9 53.51 15.45V13.22C53.51 9.58 54.51 7.81 57.35 7.81C60.19 7.81 60.99 9.32 60.99 13.1V15.25H56.27ZM56.27 12.67V13.57H58.33V12.68C58.33 10.38 58.17 9.68 57.33 9.68C56.49 9.68 56.33 10.35 56.33 12.68L56.27 12.67Z" fill="white" />
                        <path d="M75.02 11.1V20.56H72.2V11.31C72.2 10.31 71.93 9.78004 71.32 9.78004C70.78 9.80004 70.3 10.12 70.07 10.6C70.08 10.77 70.08 10.94 70.07 11.11V20.57H67.28V11.31C67.28 10.31 67.01 9.78004 66.4 9.78004C65.87 9.80004 65.4 10.11 65.17 10.58V20.58H62.4V8.00004H64.63L64.88 9.59004C65.39 8.47004 66.51 7.74004 67.74 7.73004C68.79 7.66004 69.72 8.40004 69.9 9.43004C70.45 8.42004 71.51 7.78004 72.66 7.77004C74.4 7.78004 75.02 9.00004 75.02 11.1Z" fill="white" />
                        <path d="M76.4 4.83003C76.4 3.48003 76.89 3.09003 77.93 3.09003C78.97 3.09003 79.46 3.54003 79.46 4.83003C79.46 6.12003 78.99 6.57003 77.93 6.57003C76.87 6.57003 76.4 6.22003 76.4 4.83003ZM76.59 8.00003H79.29V20.56H76.59V8.00003Z" fill="white" />
                        <path d="M88.5 8V20.56H86.3L86.05 19H85.99C85.53 20.08 84.46 20.77 83.29 20.74C81.62 20.74 80.86 19.68 80.86 17.37V8H83.68V17.19C83.68 18.29 83.91 18.74 84.48 18.74C85 18.72 85.46 18.41 85.68 17.94V8H88.5Z" fill="white" />
                        <path d="M102.8 11.1V20.56H99.98V11.31C99.98 10.31 99.71 9.78004 99.1 9.78004C98.56 9.80004 98.08 10.12 97.85 10.6C97.86 10.77 97.86 10.94 97.85 11.11V20.57H95.06V11.31C95.06 10.31 94.79 9.78004 94.18 9.78004C93.65 9.80004 93.18 10.11 92.95 10.58V20.58H90.14V8.00004H92.4L92.64 9.59004C93.15 8.47004 94.27 7.74004 95.5 7.73004C96.54 7.66004 97.47 8.37004 97.67 9.39004C98.22 8.40004 99.27 7.78004 100.4 7.77004C102.15 7.78004 102.8 9.00004 102.8 11.1Z" fill="white" />
                    </svg>

                </div>

            </div>
            <div className="flex">
                <input type="text" placeholder="Search" className="w-[575px] h-[32px] bg-transparent outline-none p-4 text-[#999999] text-[16px] border border-neutral-700 " />
                <button className="w-[50px] h-[34px] bg-[#424242] border border-neutral-700">
                    <svg className="ml-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333
 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333
  8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167
   9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667
    5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z" fill="#909090" />
                    </svg>
                </button>
            </div>
            <div className="mr-5">
                <img src="/assets/svgimg/userAvatar.svg" alt="img" />
            </div>
        </div>
    )
}
