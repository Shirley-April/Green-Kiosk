import { Box, Typography } from "@mui/material";
import ViewProducts from "../components/Owner/Products/ViewProducts";
import DashboardView from "../components/Owner";

const Dashboard = () => {
  return (
    <Box>
      <Typography>All Products here</Typography>
      <DashboardView />
    </Box>
  );
};

export default Dashboard;
