import skincancer1 from "../assets/skincancer1.jpeg"

function Creators() {
  return (
    <div className="flex  justify-center m-20">
   
  <img className=" w-1/2" src={skincancer1} alt="ai" />


      <div className="w-1/2 p-10 ">
         <p className="font-bold text-2xl mb-5">How does Artificial Intelligence analyze images?</p>
      Artificial Intelligence (AI) analyzes images for dermatological conditions through a process known as deep learning. Initially, the AI model is trained on a vast dataset of labeled skin images, with each image tagged with its corresponding diagnosis. The model learns to recognize patterns, textures, colors, and other features indicative of various skin conditions. This enables the AI to identify similar patterns in new images it encounters.<br></br><br></br>

When a user submits an image for analysis, the AI model processes it by extracting features and comparing them to patterns it has learned during training. It then assigns a probability score to each potential diagnosis. The diagnosis with the highest probability is presented as the result.
<br></br><br></br>
It's important to note that while AI can provide valuable initial assessments, it is not a replacement for professional medical advice. Dermatologists and healthcare providers play a crucial role in confirming diagnoses and providing tailored treatment plans based on a comprehensive evaluation of the patient's medical history and clinical examination.
      </div>
    </div>
  )
}

export default Creators