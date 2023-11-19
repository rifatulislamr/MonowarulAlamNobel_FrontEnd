import { useEffect } from 'react';
import './App.css'
import Footer from './Pages/Shared/Footer/Footer'
import Navbar from './Pages/Shared/Navbar/Navbar'
import Slider from './components/Banner/Banner'
import RecentNews from './components/RecentNews/RecentNews';



function App() {
  useEffect(() => {
    // Scroll to the top-left corner (0,0) when the HomePage component is mounted
    window.scrollTo(0, 0);
}, []);
 

  return (
    <>
     <div className='max-w-screen-2xl mx-auto' >
     <Navbar></Navbar>
     <Slider></Slider>
     <RecentNews></RecentNews>
     <Footer></Footer>
     </div>
      
    </>
  )
}

export default App
