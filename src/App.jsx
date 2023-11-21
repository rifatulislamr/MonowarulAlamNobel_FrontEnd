import { useEffect } from "react";
import "./App.css";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  useEffect(() => {
    // Scroll to the top-left corner (0,0) when the HomePage component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar></Navbar>
        {/* <RecentNews></RecentNews> */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
