import childdev from "../../src/assets/childdev.jpeg";
import devgirl from "../../src/assets/devgirl.png";
import devguy from "../../src/assets/devguy.webp";
import mobileapp from "../../src/assets/mobileapp.webp";
import music_girl from "../../src/assets/music_girl.jpg";
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
            <img src={childdev} alt="devchild" className="w-full h-full" />
          </div>
          <div className="">
            <img src={devgirl} alt="devgirl" className="w-full  h-full" />
          </div>
          <div>
            <img src={devguy} alt="devguy" className="w-full h-full" />
          </div>
          <div>
            <img src={mobileapp} alt="mobileapp" className="w-full h-full" />
          </div>
          <div className="bg-black text-white flex flex-col items-center justify-center ">
            <h1 className="text-4xl mb-4 bold">Say No To Skin Diseases!</h1>
            <p className="text-lg mb-8 text-center">
            Check your skin on the smartphone and get instant results within 1 minute.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Find A Disease
            </button>
          </div>

          <div>
            <img src={music_girl} alt="music_girl" className="w-full h-full" />
          </div>
        </div>
      </section>
      <section className="flex bg-gray-200  ">
        <div className=" w-1/3 p-4 h-1000  flex items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">
          AI Dermatologist <br></br> can save your life
          </h2>
        </div>
        <div className="w-1/2 p-10 flex items-center justify-center">
          <ul className=" pl-4">
            <li className="mb-2">
              <CheckCircleIcon color="success" className=" mr-2" />
              More than 2 people die of skin cancer every hour all over the world.
            </li>
            <li className="mb-2">
              <CheckCircleIcon color="success" className=" mr-2" />
              Melanoma is a skin cancer that can spread earlier and more quickly than other skin cancers.
            </li>
            <li className="mb-2">
              <CheckCircleIcon color="success" className=" mr-2" />
              Melanoma is the second most common of all cancers in men and women ages 15-29.
            </li>
            <li className="mb-2">
              <CheckCircleIcon color="success" className=" mr-2" />
              When detected early, the 5-year survival rate for melanoma is 99 percent
            </li>
          </ul>
        </div>
      </section>
     <Coursecreators />
     {/* <Creators /> */}
    <Footer/>
    </div>
  );
}

export default Home;
