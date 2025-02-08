import { Filter } from "./filter"
import { Navbar } from "./navbar"
import { SideBar } from "./side-bar"



export const Layout = ({ children, setQuery, getData, setIsOpenSidebar, isOpenSidebar  }) => {
    return (
        <div className="overflow-hidden w-full h-[100vh]">
            <Navbar setQuery={setQuery} getData={getData} setIsOpenSidebar={setIsOpenSidebar} />
            <div className='w-full h-[85%] flex items-center justify-between'>
                <div className={`${isOpenSidebar ? "w-2/12" : "w-[60px]"}  h-full`}>
                    <SideBar isOpenSidebar={isOpenSidebar} />
                </div>
                <div className="w-full h-full">
                    <Filter />
                    <div className="w-full h-full overflow-auto ">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
