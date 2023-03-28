import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Aside } from "../components/Aside/Aside"
export function Default(){
    return(
        <div className="layout" style={{ justifyContent: "center" }}>
            <div className="ms-4">
                <Sidebar />
            </div>
            <div className="content">
                <Outlet/>
            </div>
            <div className="Aside">
               <Aside/>
            </div>
        </div>
    )
}