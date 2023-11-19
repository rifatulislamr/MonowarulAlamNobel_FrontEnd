import img1 from '../../assets/social activity/si-1.jpg'
import img2 from '../../assets/social activity/si-2.jpg'
import img3 from '../../assets/social activity/si-3.jpg'
import img4 from '../../assets/Front page images/fi-4.jpg'
import './SocialNews.css'



const SocialNews = () => {
    return (
       
            <>
            <div data-aos="fade-up"
     data-aos-duration="3000" className="container mx-auto">
      <h1 className='text-4xl ml-5 border-b-2 border-black'>সামাজিক কর্মকান্ড</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      <div className=" p-4 ">
        
        <div className=" bg-white p-4 rounded border border-gray-300 shadow">
         
          <p className=' border border-gray-300 shadow p-4 mt-5'>নীরবতা সবসময় সম্মতির লক্ষণ হয় না! অনেক সময় নীরবতা...</p>
          <p className='border border-gray-300 shadow p-4 mt-5'>নীরবতা সবসময় সম্মতির লক্ষণ হয় না! অনেক সময় নীরবতা...</p>
          <p className='border border-gray-300 shadow p-4 mt-5'>নীরবতা সবসময় সম্মতির লক্ষণ হয় না! অনেক সময় নীরবতা...</p>
          <p className='border border-gray-300 shadow p-4 mt-5'>নীরবতা সবসময় সম্মতির লক্ষণ হয় না! অনেক সময় নীরবতা...</p>
          <p className='border border-gray-300 shadow p-4 mt-5'>নীরবতা সবসময় সম্মতির লক্ষণ হয় না! অনেক সময় নীরবতা...</p>
          <p className='border border-gray-300 shadow p-4 mt-5'>নীরবতা সবসময় সম্মতির লক্ষণ হয় না! অনেক সময় নীরবতা...</p>
          
        </div>
      </div>
        
        
        <div className="p-4">
          <div className=" p-4 border-r border-gray-300 col-span-2">
            {/* Second column content with 3 cards */}
            <div className="mb-4">
              <div className="bg-white  rounded ">
                <img className='w-full aspect-square ' src={img2} />
                <h1 className='text-lg  mt-2 mb-2'>নীরবতা সবসময় সম্মতির লক্ষণ হয় না! অনেক সময় নীরবতা...</h1>

              </div>
            </div>
            <div className="mb-4">
              <div className="bg-white p-4 ">
                <img className='w-full aspect-square' src={img3} />
                <h1 className='text-lg   mt-2 mb-2 not-italic'>কখনও কখনও এমন জিনিস যা আমাকে সবচেয়ে বেশি আঘাত করে, আর যা ...।</h1>
              </div>
            </div>
            <div>
              <div className="bg-white p-4">
                <img className='w-full aspect-square' src={img4} />
                <h1 className='text-lg   mt-2 mb-2'>কখনও কখনও এমন জিনিস যা আমাকে সবচেয়ে বেশি আঘাত করে, আর যা সবচেয়ে বড় শিক্ষা দেয় আমার এই জীবনের।</h1>
              </div>
              

             


            </div>
          </div>
        </div>
        
        <div className="mt-8 p-2 col-span-2 mb-5 ">
        <div className="border-r border-gray-300">
        <img className='' src={img1} />
        <h1 className='text-3xl  mt-2 mb-2'>আমার জীবনের সবচেয়ে সুন্দর মুহূর্ত গুলোর মধ্যে একটা হচ্ছে আমার নেতা আমার অভিভাবক ব্যারিস্টার শেখ ফজলে নাঈম ভাই</h1>
        <p>আমার জীবনের সবচেয়ে সুন্দর মুহূর্ত গুলোর মধ্যে একটা হচ্ছে আমার নেতা আমার অভিভাবক ব্যারিস্টার শেখ ফজলে নাঈম ভাইয়ের হাত ধরে যুব রাজনীতির মাঠে নতুন রূপে আবির্ভাব হওয়া।সেই সাথে আমি ধন্য আমার নেতা ব্যারিস্টার শেখ ফজলে নাঈম থাকার কারণে আমি বুঝতে পারি যে আমি তার ছায়ায় বসবাস করি।‌ তার কাছ থেকে অনেক কিছু শিখছি ।</p>
      </div>
        </div>
        
      </div>
    </div>
            </>
       
    );
};

export default SocialNews;