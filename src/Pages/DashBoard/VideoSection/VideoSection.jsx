

const VideoSection = () => {
   return (
      <div className="text-center">
         <h1 className="uppercase font-serif text-xl  font-md sm:text-2xl mb-10">Video upload section</h1>
         <div className="form-control w-full max-w-xs">
            <label className="label">
               <span className="label-text text-black font-bold">Video Title</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-slate-800 text-white" />
            <label className="label">
            </label>

            <label className="label">
            </label>
            <label className="label">
               <span className="label-text text-red-800 font-bold ">Youtube Video Url</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-slate-800 text-white" />
            <label className="label">
            </label>
            <button className="btn btn-outline btn-success border-4 border-red-500/100">Upload</button>
         </div>
      </div>

   );
};

export default VideoSection;