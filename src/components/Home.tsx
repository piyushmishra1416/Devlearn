// import childdev from "../../src/assets/childdev.jpeg";
// import devgirl from "../../src/assets/devgirl.png";
// import devguy from "../../src/assets/devguy.webp";
// import mobileapp from "../../src/assets/mobileapp.webp";
// import music_girl from "../../src/assets/music_girl.jpg";
import skinimage7 from '../assets/skinimage7.webp'
import skinimage6 from '../assets/skinimage6.jpeg'
import skinimage3 from '../assets/skinimage3.jpeg'
import skinimage4 from '../assets/skinimage4.jpeg'
import skinimage9 from '../assets/skincancer9.jpeg'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Footer from "../layouts/Footer";
import Coursecreators from "./Coursecreators";
import Creators from "./Creators";
import Header from "../layouts/Header";
import Howuse from './Howuse'

function Home() {
  return (
    <div>
       <Header />
      <section className=" flex justify-center">
        <div className="grid grid-cols-3 gap-">
          <div>
            <img src={skinimage9} alt="devchild" className="w-full h-full" />
          </div>
          <div className="">
            <img src={skinimage7} alt="devgirl" className="w-full  h-full" />
          </div>
          <div>
            <img src={skinimage6} alt="devguy" className="w-full h-full" />
          </div>
          <div>
            <img src={skinimage3} alt="mobileapp" className="w-full h-96" />
          </div>
          <div className="bg-pink-100 text-black flex flex-col items-center justify-center h-96" style={{ background: '#F0F4F8' }}>
  <h1 className="text-4xl mb-4 font-bold px-2">Say No To Skin Diseases!</h1>
  <hr className="border-b-2 border-pink-500 w-16 mb-4" />
  <p className=" mb-2 text-center px-16 text-slate-400">
    Check your skin on the smartphone and get instant results within 1 minute.
  </p>
  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
    Diagnose the Skin Disease
  </button>
</div>



          <div>
            <img src={skinimage4} alt="music_girl" className="w-full h-96" />
          </div>
        </div>
      </section>
      <section className="flex justify-center mt-10  ">
        <div className="  p-4 h-1000  flex items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">
          What do you know <br></br>in 1 minute?
          </h2>
        </div>
        <div className=" p-10 flex items-center justify-center">
          <ul className=" pl-4">
            <li className="mb-2">
              <CheckCircleIcon color="success" className=" mr-2" />
              Skin cancer ((melanoma, BKK, BCC, etc.))
            </li>
            <li className="mb-2">
              <CheckCircleIcon color="success" className=" mr-2" />
              Benign formation (moles, angeoma, dermatofibroma, etc.)

            </li>
            <li className="mb-2">
              <CheckCircleIcon color="success" className=" mr-2" />
              Papilloma virus (warts, papillomas, mollusks, etc.)
            </li>
            <li className="mb-2">
              <CheckCircleIcon color="success" className=" mr-2" />
              Acne Types
            </li>
          </ul>
        </div>
      </section>
     <Coursecreators />
     <Howuse />
     <Creators />
    <Footer/>
    </div>
  );
}

export default Home;
