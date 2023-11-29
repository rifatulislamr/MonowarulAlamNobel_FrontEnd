import { Link, Outlet } from "react-router-dom";
import { FaUser, FaVideoSlash } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";


const DashBoardHome = () => {
    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center ">
                    <h1 className="text-3xl md:text-5xl text-center mb-5  text-red-700 bg-emerald-200 p-4  rounded-lg font-medium" ><span className="text-slate-700">Welcome</span> To Dashboard</h1>
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-error drawer-button lg:hidden mt-6">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content ">
                        {/* Sidebar content here */}
                        <li className="text-white text-bold text-[16px] hover:bg-slate-600   mt-10"><Link to='/dashboard/recentNews-section'><FaUser></FaUser>Recent News Section</Link></li>
                        <li className="text-white text-bold text-[16px] hover:bg-slate-600  mt-3 "><Link to='/dashboard/personalNews-section'><FaUser></FaUser>Personal News Section</Link></li>
                        <li className="text-white text-bold text-[16px] hover:bg-slate-600  mt-3 "><Link to='/dashboard/socialNews-section'><FaUser></FaUser>Social News Section</Link></li>
                        <li className="text-white text-bold text-[16px] hover:bg-slate-600  mt-3 "><Link to='/dashboard/politicalNews-section'><FaUser></FaUser>Political News Section</Link></li>
                        <li className="text-white text-bold text-[16px] hover:bg-slate-600  mt-3"><Link to='/dashboard/video-section'><FaVideoSlash></FaVideoSlash>Video Section</Link></li>
                        <li className="text-white text-bold text-[16px] hover:bg-slate-600  mt-3"><Link to='/'><FaHome></FaHome>home</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardHome;