// import img1 from '../../assets/Front page images/fi-2.jpg'
// import img2 from '../../assets/Front page images/fi-1.jpg'
// import img3 from '../../assets/Front page images/fi-3.jpg'
// import img4 from '../../assets/Front page images/fi-4.jpg'
// import img5 from '../../assets/Front page images/fi-5.jpg'
// import img6 from '../../assets/Front page images/fi-6.jpg'
// import img7 from '../../assets/Front page images/fi-7.jpg'
// import './RecentNews.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import data from '../../../public/allFile.json'


const RecentNews = () => {

  return (




    <div data-aos="fade-up"
      data-aos-duration="2000"
      className="container mx-auto">
      <h1 className='text-4xl ml-5 border-b-2 border-black mt-10'>সম্প্রতি বার্তা</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          data.map(({ title, subTitle, image, _id, classes }) => {
            return (
              <div key={_id} className={`${classes ? classes : null}`}>

                <div>

                  <div className="flex-1 p-4 border-r border-gray-300 ">
                    <img className='w-full  transition duration-0 hover:duration-150' src={image} />
                    <h1 className='text-3xl  mt-2 mb-2'>{title}</h1>
                    <p>{subTitle}</p>

                  </div>
                </div>
              </div>




            )
          })
        }

      </div>

    </div>

  );
};

export default RecentNews;