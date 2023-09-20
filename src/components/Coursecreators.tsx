import gameback from "../assets/gameback.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import iosdeveloper from "../assets/iosdeveloper.jpeg"
import appdev from "../assets/appdev.jpeg"
import webdesign from "../assets/webdesign.jpeg"
import devgame from "../assets/devgame.jpg"


function Coursecreators() {

  return (
   <div style={{ position: 'relative' }}>
   <img src={gameback} alt="background" style={{ width: '100%' }} />
   <div className="text-2xl font-bold font-serif  py-2 px-4 rounded-full"
  style={{
    position: 'absolute',
    top: '8%',
    left: '50%',  // Center horizontally
    transform: 'translateX(-50%)', // Adjust horizontally
    zIndex: 1,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Adding a subtle box shadow
  }}
>
Why is AI Dermatologist worth using?
</div>

   <div
     style={{
       position: 'absolute',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       display: 'flex',
       gap: '16px',
       maxWidth: '1200px',
       width: '100%'
     }}
   >
      <div className="flex space-x-4 mt-24">
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={devgame}
          alt="green iguana"
          className="h-80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
          AI Dermatologist is created on the basis of artificial intelligence as a result of joint work of IT specialists and doctors. Our app has the Same accuracy as a professional dermatologist
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image ={iosdeveloper}
          alt="green iguana"
          className="h-80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
          You bring the phone to a mole or other formation on the skin, and in 1 minute you will know if there is any reason for concern.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={webdesign}
          alt="green iguana"
          className="h-80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
          AI Dermatologist is available anytime, anywhere. Keep your health in check at your fingertips even when you are on the go.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={appdev}
          alt="green iguana"
          className="h-80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
          AI Dermatologist’s leading image analytics features come at an unbeatable price, fit for any request or budget. Flexible pricing plans and customizable bundles will save your practice both time and money.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>    
      </div>
    </div>
  );
}

export default Coursecreators;
