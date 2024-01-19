import { Box, Grid, Typography } from "@mui/material";
import TaskCard from "./TaskCard";


function TaskPage() {
  const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Box
      sx={{
        backgroundColor: ["inherit", "#1E1E1B"],
        height: "100%",
        borderRadius: "16px",
        padding: ["1rem", "1.5rem"],
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography
        sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "1.2rem" }}
      >
        All Task
      </Typography>
      <Grid
        container
        spacing={2}
        height={"92%"}
        sx={{ overflow: "hidden", overflowY: "scroll" }}
      >
        {tasks.map((task) => {
          return (
            <Grid item xs={12} md={4} lg={3} key={task}>
              <TaskCard/>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default TaskPage;