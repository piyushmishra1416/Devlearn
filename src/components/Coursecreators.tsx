import smart from "../assets/aiwhy/smart.avif"
import simple from "../assets/aiwhy/simple.jpeg"
import access from "../assets/aiwhy/access.png"
import afford from "../assets/aiwhy/afford.jpeg"




function Coursecreators() {
  return (
   <div className="">

   <h2 className="flex justify-center text-3xl mt-10 font-bold ">Why SKINSAGE is worth using?</h2>
   <div className="flex justify-center items-centre mx-20">
   <div className="grid grid-cols-4 gap-4 mt-20">
     <div className=" flex flex-col bg-amber-100 hover:bg-orange-300 p-3 rounded">
       <img src={smart} className="w-20 h-20 mb-5 rounded-full" alt="Smart Icon" />
       <p className="font-bold">Smart</p>
       <p>AI Dermatologist is created on the basis of artificial intelligence as a result of joint work of IT specialists and doctors. Our app has the same accuracy as a professional dermatologist upon which you can rely on.</p>
     </div>
     <div className="flex flex-col bg-amber-100 hover:bg-orange-300 p-3 rounded "> 
       <img src={simple} className="w-20  h-20 mb-5 rounded-full" alt="Simple Icon" />
       <p className="font-bold">Simple</p>
       <p>You bring the phone to a mole, and in 1 minute you will know if there is any reason for concern.
This innovative technology provides a quick way to monitor skin health, offering peace of mind with timely and accurate information.</p>
     </div>
     <div className="flex flex-col p-3   bg-amber-100 hover:bg-orange-300 rounded">
       <img src={afford} className="w-20  h-20 mb-5 rounded-full" alt="Affordable Icon" />
       <p className="font-bold">Affordable</p>
       <p>AI Dermatologist’s leading image analytics features come at an unbeatable price, fit for any request or budget. Flexible pricing plans and customizable bundles will save your practice both time and money.</p>
     </div>
     <div className="flex flex-col p-3  bg-amber-100 hover:bg-orange-300 rounded">
       <img src={access} className="w-20 h-20 mb-5 rounded-full " alt="Accessible Icon" />
       <p className="font-bold">Accessible</p>
       <p>AI Dermatologist is created on the basis of artificial intelligence as a result of joint work of IT specialists and doctors. Our app has the same accuracy as a professional dermatologist.</p>
     </div>
     </div>
   </div>
 </div>
 
  )
}

export default Coursecreators