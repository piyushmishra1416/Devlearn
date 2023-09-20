import focus from "../assets/howuse/focus.png"
import save from "../assets/howuse/save.png"
import send from "../assets/howuse/send.png"

function Howuse() {
  return (
   <div className="">

   <h2 className=" text-3xl ml-24 mt-32 font-bold ">How to use SKINSAGE?</h2>
   <div className="flex justify-center items-centre mx-20">
   <div className="grid grid-cols-3 gap-4 mt-10">
     <div className=" flex flex-col p-3 rounded">
       <img src={focus} className="w-60 h-60 " alt="Smart Icon" />
       <p className="font-bold">Smart</p>
       <p>Keep zoomed at the closest distance (less than 10 cm), keep in focus and center only the skin mark (without hair, wrinkles and other objects)</p>
     </div>
     <div className="flex flex-col p-3 rounded "> 
       <img src={send} className="w-60 h-60 " alt="Simple Icon" />
       <p className="font-bold">Simple</p>
       <p>Send your photo to the Artificial Intelligence. The system will analyze it and send you a risk assessment..</p>
     </div>
     <div className="flex flex-col p-3 rounded">
       <img src={save} className="w-60 h-60 " alt="Affordable Icon" />
       <p className="font-bold">Affordable</p>
       <p>In just 60 seconds, receive your results and receive expert guidance on the necessary next steps, ensuring swift and informed decisions for your skin health.</p>
     </div>
     
     </div>
   </div>
 </div>
  )
}

export default Howuse