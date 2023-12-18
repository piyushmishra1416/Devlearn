import childdev from "../../src/assets/childdev.jpeg";
import devgirl from "../../src/assets/devgirl.png";
import devguy from "../../src/assets/devguy.webp";
import mobileapp from "../../src/assets/mobileapp.webp";
import music_girl from "../../src/assets/music_girl.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import neonback from "../assets/neonback.mp4"
import Footer from "../layouts/Footer";
import Creators from "../components/Creators";
import Samplecourse from "../components/Samplecourse";

function Home() {
  return (
    <div>
      <section className=" flex mt-200 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div>
            <img
              src={childdev}
              alt="devchild"
              className="w-screen md:w-full h-full"
            />
          </div>
          <div className="">
            <img
              src={devgirl}
              alt="devgirl"
              className="w-screen md:w-full hidden md:block  h-full"
            />
          </div>
          <div>
            <img
              src={devguy}
              alt="devguy"
              className="w-screen md:w-full hidden md:block h-full"
            />
          </div>
          <div>
            <img
              src={mobileapp}
              alt="mobileapp"
              className="w-screen md:w-full hidden md:block h-full"
            />
          </div>
          <div className="text-white flex flex-col w-screen md:w-full items-center justify-center relative">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-75">
              <source src={neonback} type="video/mp4" />
            </video>
            <div className="z-10 text-center font-sans font-bold">
              <h1 className="text-5xl mb-4 font-bold font-sans">Welcome to DevLearn</h1>
              <hr className="w-16 border-b-2 border-white mb-8"></hr>
              <p className="text-3xl mb-8 text-center">
                Your Gateway to Development Excellence
              </p>
              <button
  className="bg-black hover:bg-black text-white hover:text-[#0af] font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
  style={{
    boxShadow: '0 0 10px #0af, 0 0 20px #0af, 0 0 30px #0af, 0 0 40px #0af, 0 0 70px #0af, 0 0 80px #0af, 0 0 100px #0af, 0 0 150px #0af',
  }}
>
  Get Started
</button>


            </div>
          </div>

          <div>
            <img
              src={music_girl}
              alt="music_girl"
              className="w-screen md:w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row h-] py-14 bg-white text-black">
        <div className="w-full md:w-[40%] p-4 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
            Why CHOOSE DevLearn ?
          </h2>
        </div>
        <div className="w-full md:w-[60%] p-4 flex  items-center justify-center">
          <ul className="pl-4 space-y-5  pr-0 md:pr-32 md:font-bold md:text-[24px]">
            <li className="mb-2 flex items-center">
              <CheckCircleIcon color="success" className="mr-2" />
              Expert Instructors: Learn from industry professionals with years
              of experience.
            </li>
            <li className="mb-2 flex items-center">
              <CheckCircleIcon color="success" className="mr-2" />
              Comprehensive Curriculum: Dive deep into a wide range of
              development topics.
            </li>
            <li className="mb-2 flex items-center">
              <CheckCircleIcon color="success" className="mr-2" />
              Hands-On Learning: Apply your knowledge through practical projects
              and exercises.
            </li>
            <li className="mb-2 flex items-center">
              <CheckCircleIcon color="success" className="mr-2" />
              Community Support: Connect with fellow learners and mentors for
              guidance and collaboration.
            </li>
          </ul>
        </div>
      </section>

      <Samplecourse />
      <Creators />
      <Footer />
    </div>
  );
}

export default Home;
