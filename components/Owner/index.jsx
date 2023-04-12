import { Box, Typography } from "@mui/material";
import ViewProducts from "./Products/ViewProducts";

const Dashboard = () => {
  return (
    <Box>
      <Typography>View all products</Typography>
      <ViewProducts/>
    </Box>
  );
};

export default Dashboard;
