import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Footer } from "../components/Footer/footer";
import Carousel from "react-bootstrap/Carousel"

export function Default() {
    return (
        <>
            <div className="layout">
                <Sidebar />
                <Header />
                <div className="content">
                    <Outlet />
                </div>
            </div>
            {/* <Footer /> reservado pra uso futuro*/}
        </>
    )
}