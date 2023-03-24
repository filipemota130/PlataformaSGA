import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Default(){
    return(
        <div className="layout">
            <Sidebar/>
            <Header/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}