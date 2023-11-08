import childdev from "../../src/assets/childdev.jpeg";
import devgirl from "../../src/assets/devgirl.png";
import devguy from "../../src/assets/devguy.webp";
import mobileapp from "../../src/assets/mobileapp.webp";
import music_girl from "../../src/assets/music_girl.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Footer from "../layouts/Footer";
import Coursecreators from "./Coursecreators";
import Creators from "./Creators";


function Home() {
  return (
    <div>
      
      <section className=" flex mt-200 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div>
            <img src={childdev} alt="devchild" className="w-screen md:w-full h-full" />
          </div>
          <div className="">
            <img src={devgirl} alt="devgirl" className="w-screen md:w-full hidden md:block  h-full" />
          </div>
          <div>
            <img src={devguy} alt="devguy" className="w-screen md:w-full hidden md:block h-full" />
          </div>
          <div>
            <img src={mobileapp} alt="mobileapp" className="w-screen md:w-full hidden md:block h-full" />
          </div>
          <div className="bg-black text-white flex flex-col w-screen md:w-full items-center justify-center ">
            <h1 className="text-4xl mb-4 bold">Welcome to DevLearn</h1>
            <p className="text-lg mb-8 text-center">
              Your Gateway to Development Excellence
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>

          <div>
            <img src={music_girl} alt="music_girl" className="w-screen md:w-full h-full" />
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row bg-gray-200">
  <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
      Why CHOOSE DevLearn ?
    </h2>
  </div>
  <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
    <ul className="pl-4 text-lg">
      <li className="mb-2 flex items-center">
        <CheckCircleIcon color="success" className="mr-2" />
        Expert Instructors: Learn from industry professionals with years of
        experience.
      </li>
      <li className="mb-2 flex items-center">
        <CheckCircleIcon color="success" className="mr-2" />
        Comprehensive Curriculum: Dive deep into a wide range of development
        topics.
      </li>
      <li className="mb-2 flex items-center">
        <CheckCircleIcon color="success" className="mr-2" />
        Hands-On Learning: Apply your knowledge through practical projects and
        exercises.
      </li>
      <li className="mb-2 flex items-center">
        <CheckCircleIcon color="success" className="mr-2" />
        Community Support: Connect with fellow learners and mentors for guidance
        and collaboration.
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
