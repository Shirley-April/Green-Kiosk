import { Box, Typography, Grid, Stack, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import CartSummary from "../CartSummary";

const Products = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/products",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((product, index) => (
        <Grid item key={product._id} md={3} xs={6}>
          <Stack border={1} px={2} sx={{borderRadius: 2, py: 2}}>
            <Box p={10}></Box>
            <Typography sx={{fontWeight: "bold"}}>{product.name}</Typography>
            <Typography variant="subtitle2">{product.description}</Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                KES {product.price}
              </Typography>
              <CartSummary product={product}/>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
