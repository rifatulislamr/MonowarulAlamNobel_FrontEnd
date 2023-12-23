// import { useState } from 'react';
// import Swal from 'sweetalert2';

// const VideoSection = () => {
//   const [title, setTitle] = useState('');
//   const [link, setLink] = useState('');
 

//   const handleUpload = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/all-videos/addData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title, link }),
//       });
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Your work has been saved",
//         showConfirmButton: false,
//         timer: 1500
//       });

     

//       if (response.ok) {
//         const data = await response.json();
//         console.log(data.message);
//       } else {
//         console.error('Failed to upload video');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="text-center">
//       <h1 className="uppercase font-serif text-xl font-md sm:text-2xl mb-10">Video upload section</h1>
//       <div className="form-control w-full max-w-xs">
//         <label className="label">
//           <span className="label-text text-black font-bold">Video Title</span>
//         </label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Type here"
//           className="input input-bordered w-full max-w-xs bg-slate-800 text-white"
//         />

//         <label className="label">
//           <span className="label-text text-red-800 font-bold">Youtube Video Url</span>
//         </label>
//         <input
//           type="text"
//           value={link}
//           onChange={(e) => setLink(e.target.value)}
//           placeholder="Type here"
//           className="input input-bordered w-full max-w-xs bg-slate-800 text-white"
//         />

//         <button
//           className=" my-5 btn btn-outline btn-success border-4 border-red-500/100"
//           onClick={handleUpload}
//         >
//           Upload
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoSection;


import { useState } from 'react';
import Swal from 'sweetalert2';

const VideoSection = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const handleUpload = async () => {
    try {
      const response = await fetch('http://localhost:3000/all-videos/addData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, link }),
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);

        // Clear the form after successful upload
        setTitle('');
        setLink('');
      } else {
        console.error('Failed to upload video');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="text-center">
      <h1 className="uppercase font-serif text-xl font-md sm:text-2xl mb-10">Video upload section</h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-black font-bold">Video Title</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-slate-800 text-white"
        />

        <label className="label">
          <span className="label-text text-red-800 font-bold">Youtube Video Url</span>
        </label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-slate-800 text-white"
        />

        <button
          className="my-5 btn btn-outline btn-success border-4 border-red-500/100"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default VideoSection;














