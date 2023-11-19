import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const navOption = <>
    <li className='main-nav-item group relative cursor-pointer font-montserrat text-sm text-slate-gray before:absolute before:inset-x-0 before:top-[104%] before:h-0.5 before:origin-left before:scale-x-0 before:bg-slate-600 before:transition before:duration-200 hover:before:scale-x-100'><a className='main-nav-link'>হোম</a></li>
    <li className='group relative cursor-pointer font-montserrat text-sm text-slate-gray before:absolute before:inset-x-0 before:top-[104%] before:h-0.5 before:origin-left before:scale-x-0 before:bg-slate-600 before:transition before:duration-200 hover:before:scale-x-100'><a>ব্যক্তিগত কর্মকান্ড</a></li>
    <li className='group relative cursor-pointer font-montserrat text-sm text-slate-gray before:absolute before:inset-x-0 before:top-[104%] before:h-0.5 before:origin-left before:scale-x-0 before:bg-slate-600 before:transition before:duration-200 hover:before:scale-x-100'><a>সামাজিক কর্মকান্ড</a></li>
    <li className='group relative cursor-pointer font-montserrat text-sm text-slate-gray before:absolute before:inset-x-0 before:top-[104%] before:h-0.5 before:origin-left before:scale-x-0 before:bg-slate-600 before:transition before:duration-200 hover:before:scale-x-100'><a>রাজনৈতিক কর্মকান্ড</a></li>
    <li className='group relative cursor-pointer font-montserrat text-sm text-slate-gray before:absolute before:inset-x-0 before:top-[104%] before:h-0.5 before:origin-left before:scale-x-0 before:bg-slate-600 before:transition before:duration-200 hover:before:scale-x-100'><a>যোগাযোগ</a></li>
    <li><a href="https://www.facebook.com/monowarul.a.nobel/" target="_blank " ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-700"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a></li>
    <li> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-400"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a></li>
    <li><a href="https://www.youtube.com/channel/UCkg_4V3voPoSGaZ9C14kMzg" target='_blank ' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-red-600"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a></li>

  </>

  return (
    <>
      <div className="rounded-2xl navbar sticky top-0  z-10  max-w-screen-2xl  bg-slate-300 text-black font-medium  ">
        <div className="navbar-start">
          <div className="dropdown ">
            <button
              className="lg:hidden"
              onClick={toggleDropdown}
            >
              {isOpen ? (
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
              ) : (
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

              )}
            </button>
            {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-white rounded-box w-52"> */}
            <ul tabIndex={0} className={`lg:flex ${isOpen ? 'block' : 'hidden'} md:mt-0  menu menu-sm dropdown-content mt-4 ml-3 z-[2] p-2 shadow bg-slate-300 rounded-box w-52 `}>

              {navOption}
            </ul>
          </div>
          <a href="#" className="btn btn-ghost normal-case text-xl ">মনোয়ার উল আলম নোবেল</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {navOption}



          </ul>
        </div>


      </div>
    </>
  );
};

export default Navbar;