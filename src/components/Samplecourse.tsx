import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import iosdeveloper from "../assets/iosdeveloper.jpeg";
import appdev from "../assets/appdev.jpeg";
import webdesign from "../assets/webdesign.jpeg";
import devgame from "../assets/devgame.jpg";
import "../css/samplecourse.css"

function Samplecourse() {
  return (
    <div className="sampleback h-[100%]">

      <div
        className="text-3xl font-bold text-stone-400 font-serif text-center py-4 rounded-full"
      >
        Empowering Developers, One Skill at a Time
      </div>

      <div
        style={{
          // position: "absolute",
          // top: "50%",
          // left: "50%",
          // transform: "translate(-50%, -50%)",
          // display: "flex",
          // gap: "16px",
          // maxWidth: "1200px",
          // width: "100%",
        }}
      >
        <div className="flex flex-col md:flex-row space-x-4 space-y-3 md:space-y-0 pb-4 mt- pt-4">
          <Card sx={{ maxWidth: 345 ,
      width: ['100%', null, '25%'] }}>
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
                  Game Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Game development is the process of creating video games —
                  using technical knowledge and skills to turn game concepts and
                  ideas into reality. turn game concepts and
                  ideas into reality.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345,
      width: ['100%', null, '25%'] }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={iosdeveloper}
                alt="green iguana"
                className="h-80"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  Android Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Android development is a form of software engineering dedicated specifically to creating applications for devices that run on the Android platform. Android operating system is the largest installed base.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345,
      width: ['100%', null, '25%'] }}>
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
                  Web Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345,
      width: ['100%', null, '25%'] }}>
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
                  IOS Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                iOS development is the process of creating applications for Apple’s mobile operating system—the operating system used by the iPhone and iPod Touch. In this most fundamental sense, it has a lot in common with other types of software or app development, but there are a few key differences.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Samplecourse;
