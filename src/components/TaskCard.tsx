import {
   Box,
   Button,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   Typography,
 } from "@mui/material";
 import DeleteIcon from "@mui/icons-material/Delete";
 import EditIcon from "@mui/icons-material/Edit";
 
 const TaskCard = () => {
   return (
     <Card
       sx={{
         width: "100%",
         height: "200px",
         color: "white",
         backgroundColor: "rgba(66, 66, 66, 1)",
         borderRadius: "10px",
         marginTop: "4px",
       }}
     >
       <CardHeader
         title="Task Name"
         sx={{
           paddingTop: "10px",
           paddingBottom: "0px",
         }}
       />
 
       <CardContent
         sx={{
           height: "100px",
           overflow: "hidden",
           overflowY: "scroll",
           pt: "8px",
           mb: 1,
           cursor: "pointer",
         }}
       >
         <Typography variant="body2" color="white">
           This impressive paella is a perfect party dish and a fun meal to cook
           together with your guests. Lorem ipsum dolor sit amet consectetur,
           adipisicing elit. Commodi quas accusamus facilis numquam quaerat!
           Blanditiis nobis minima, sunt illum deleniti, vero possimus modi,
           dignissimos laborum earum quos! Facilis molestias unde tempora, esse
           quis ex quibusdam non eum sint distinctio alias, doloremque saepe
           aperiam molestiae voluptates qui, sequi dicta necessitatibus possimus.
         </Typography>
       </CardContent>
       <CardActions sx={{ justifyContent: "space-between", px: "14px" }}>
         <Button
           variant="contained"
           size="small"
           sx={{ borderRadius: 16, backgroundColor: "#41A416" }}
         >
           Contained
         </Button>
         <Box>
           <EditIcon sx={{ cursor: "pointer" }} />
           <DeleteIcon sx={{ cursor: "pointer" }} />
         </Box>
       </CardActions>
     </Card>
   );
 };
 
 export default TaskCard;