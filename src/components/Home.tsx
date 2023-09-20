// import childdev from "../../src/assets/childdev.jpeg";
// import devgirl from "../../src/assets/devgirl.png";
// import devguy from "../../src/assets/devguy.webp";
// import mobileapp from "../../src/assets/mobileapp.webp";
// import music_girl from "../../src/assets/music_girl.jpg";
import skinimage7 from '../assets/skinimage7.webp'
import skinimage6 from '../assets/skinimage6.jpeg'
import skinimage3 from '../assets/skinimage3.jpeg'
import skinimage4 from '../assets/skinimage4.jpeg'
import skinimage5 from '../assets/skinimage5.jpeg'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Footer from "../layouts/Footer";
import Coursecreators from "./Coursecreators";
import Creators from "./Creators";
import Header from "../layouts/Header";

function Home() {
  return (
    <div>
       <Header />
      <section className=" flex justify-center">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <img src={skinimage5} alt="devchild" className="w-full h-full" />
          </div>
          <div className="">
            <img src={skinimage7} alt="devgirl" className="w-full  h-full" />
          </div>
          <div>
            <img src={skinimage6} alt="devguy" className="w-full h-full" />
          </div>
          <div>
            <img src={skinimage3} alt="mobileapp" className="w-full h-full" />
          </div>
          <div className="bg-black text-white flex flex-col items-center justify-center ">
            <h1 className="text-4xl mb-4 bold">Welcome to DevLearn</h1>
            <p className="text-lg mb-8 text-center">
              Your Gateway to Development Excellence
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>

          <div>
            <img src={skinimage4} alt="music_girl" className="w-full h-full" />
          </div>
        </div>
      </section>
      <section className="flex bg-gray-200  ">
        <div className=" w-1/3 p-4 h-1000  flex items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">
            Why CHOOSE<br></br> DevLearn ?
          </h2>
        </div>
        <div className="w-1/2 p-10 flex items-center justify-center">
          <ul className=" pl-4">
            <li className="mb-2">
              <CheckCircleIcon color="success" className=" mr-2" />
              Expert Instructors: Learn from industry professionals with years
              of experience.
            </li>
            <li className="mb-2">
              <CheckCircleIcon color="success" className=" mr-2" />
              Comprehensive Curriculum: Dive deep into a wide range of
              development topics.
            </li>
            <li className="mb-2">
              <CheckCircleIcon color="success" className=" mr-2" />
              Hands-On Learning: Apply your knowledge through practical projects
              and exercises.
            </li>
            <li className="mb-2">
              <CheckCircleIcon color="success" className=" mr-2" />
              Community Support: Connect with fellow learners and mentors for
              guidance and collaboration.
            </li>
          </ul>
        </div>
      </section>
     <Coursecreators />
     <Creators />
    <Footer/>
    </div>
  );
}

export default Home;
