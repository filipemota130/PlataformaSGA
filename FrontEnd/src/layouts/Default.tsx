import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Aside } from "../components/Aside/Aside"
export function Default() {
    return (
        <div className="layout" style={{ justifyContent: "center" }}>
                <div>
                    <Sidebar />
                </div>
                <div className="content mx-5">
                    <Outlet />
                </div>
                <div>
                    <Aside />
                </div>
        </div>
    )
}