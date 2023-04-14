import { Box } from "@mui/material";

import Products from "../components/Products";
import Header from "../components/Header";

export default function Home() {
  return (
    <Box m={{ md: 10, xs: 1 }}>
      <Header />
      <Products />
    </Box>
  );
}
