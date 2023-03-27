import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Aside } from "../components/Aside/Aside"
export function Default(){
    return(
        <div className="layout">
            <Sidebar/>
            <div className="content">
                <Outlet/>
            </div>
            <div className="Aside">
               <Aside/>
            </div>
        </div>
    )
}