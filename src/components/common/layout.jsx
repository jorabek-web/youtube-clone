import { Filter } from "./filter"
import { Navbar } from "./navbar"
import { SideBar } from "./side-bar"



export const Layout = ({ children, setQuery, getData }) => {
    return (
        <div className="overflow-hidden w-full h-[100vh]">
            <Navbar setQuery={setQuery} getData={getData} />
            <div className='w-full h-full flex items-center justify-between'>
                <div className="w-2/12   h-full">
                    <SideBar />
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
