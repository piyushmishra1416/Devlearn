import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
   <section
   className="h-full  flex flex-col text-white "
   style={{ backgroundColor: "#002333" }}
 >
   <div className="flex flex-col mt-10 items-center justify-center">
     <h2 className="font-bold mb-4">FOLLOW Us on:</h2>
     <div className="flex space-x-4">
     <FacebookIcon fontSize="large" sx={{ color: "#1877f2" }} />
<YouTubeIcon fontSize="large" sx={{ color: "#ff0000" }} />
<InstagramIcon fontSize="large" sx={{ color: "#e4405f" }} />
<LinkedInIcon fontSize="large" sx={{ color: "#0077b5" }} />
<TwitterIcon fontSize="large" sx={{ color: "#1da1f2" }} />
<PinterestIcon fontSize="large" sx={{ color: "#bd081c" }} />

     </div>
   </div>
   <div className="flex mt-14 px-28">
  <div className="w-1/2">
    <h2 className="font-bold  text-2xl">SKINSAGE</h2>
  </div>
  <div className="w-1/4 ml-14">
    <ul className="text-lg">
      <li className="mb-2 font-bold">SKINSAGE</li>
      <li>About</li>
      <li>Careers</li>
      <li>Blogs</li>
      <li>Affiliates</li>
    </ul>
  </div>
  <div className="w-1/4">
    <ul className="text-lg">
      <li className="mb-2 font-bold">Support</li>
      <li>Product Help</li>
      <li>Raise an Issue</li>
      <li>Advertise with us</li>
      <li>Affiliates</li>
    </ul>
  
</div>

    
   </div>
   <hr className="mt-10 mx-auto border-white w-3/4 mb-4" />
      <div className="flex ml-40  mb-10">
        <p className="text-sm mr-2">© Skinsage, Inc. </p>
        <a href="#" className="text-sm mx-2">Help</a>
        <a href="#" className="text-sm mx-2">Privacy Terms</a>
      </div>
 </section>
  )
}

export default Footer