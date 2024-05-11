import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { useEffect } from "react";


const Main = () => {
    useEffect(() => {
        // Scroll to the top-left corner (0,0) when the HomePage component is mounted
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;