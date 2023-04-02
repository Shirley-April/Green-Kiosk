import { Box } from "@mui/material";

import Products from "../components/Products";

export default function Home() {
  return (
    <Box m={{ md: 10, xs: 1 }}>
      <Products />
    </Box>
  );
}
