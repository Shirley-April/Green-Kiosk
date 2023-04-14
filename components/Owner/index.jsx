import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ViewProducts from "./Products/ViewProducts";
import UploadProducts from "./Products/UploadProducts";

const DashboardView = () => {
  return (
    <Box>
      <UploadProducts/>
      <Grid container>
        <Grid item md={2}>
          <Typography>Side bar here</Typography>
        </Grid>

        <Grid item md={10} pr={5}>
          <ViewProducts />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardView;
