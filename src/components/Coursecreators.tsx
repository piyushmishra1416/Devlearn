import gameback from "/Users/piyush/Devlearn/src/assets/gameback.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import iosdeveloper from "/Users/piyush/Devlearn/src/assets/iosdeveloper.jpeg"
import appdev from "/Users/piyush/Devlearn/src/assets/appdev.jpeg"
import webdesign from "/Users/piyush/Devlearn/src/assets/webdesign.jpeg"
import devgame from "/Users/piyush/Devlearn/src/assets/devgame.jpg"


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
  Empowering Developers, One Skill at a Time
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
