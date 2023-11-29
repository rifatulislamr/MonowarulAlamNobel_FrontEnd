import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const PoliticalNewsSection = () => {
    const [formData, setFormData] = useState({
      title: '',
      subtitle: '',
      image: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Send data to the backend
        await axios.post('http://localhost:3000/political-news/addData', formData);
          // alert("Data inserted successfully");
        // Show success message using SweetAlert2
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        
        
          // Clear form after successful submission
        setFormData({
          title: '',
          subtitle: '',
          image: '',
        });
  
        // You can add additional logic here, such as showing a success message
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error('Error submitting data:', error);
      }
    };
  
  
  
    return (
      <div className="text-center justify-center">
        <h1 className="uppercase font-serif text-xl  font-md sm:text-2xl mb-10"><span className="font-bold text-red-600">Political</span> News upload section</h1>
        <div className="form-control w-full max-w-xs">
  
        <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
        <label className="label">
          <span className="label-text text-black font-bold">Content Title</span>
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Type here"
          className="input input-bordered w-full bg-slate-800 text-white"
          required
        />
  
        <label className="label">
          <span className="label-text text-black font-bold">Content Subtitle</span>
        </label>
        <input
          type="text"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          placeholder="Type here"
          className="input input-bordered w-full bg-slate-800 text-white"
          required
        />
  
        <label className="label">
          <span className="label-text text-black font-bold">Image Url</span>
        </label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Type here"
          className="input input-bordered w-full bg-slate-800 text-white"
          required
        />
  
       <div className="my-6">
       <button type="submit" className="px-8 py-4 rounded-md  bg-cyan-600  hover:bg-cyan-700 transition text-white font-md">
          Upload
        </button>
       </div>
      </form>
        </div>
      </div>
    );
  };

export default PoliticalNewsSection;