import { Navbar } from "./navbar"
import { SideBar } from "./side-bar"



export const Layout = ({ children }) => {
    return (
        <div className="overflow-hidden w-full h-[100vh]">
            <Navbar />
            <div className='w-full h-full flex items-center justify-between'>
                <div className="w-2/12 h-full">
                    <SideBar />
                </div>
                <div className="w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}
