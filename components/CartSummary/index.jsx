import {
  Typography,
  Box,
  Dialog,
  IconButton,
  Drawer,
  Button,
  Stack,
  Divider,
  Grid,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addQuantity,
  decreaseQuantity,
  deleteProduct,
} from "../Cart/cartSlice";

import { useState } from "react";

const CartSummary = ({ product }) => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <IconButton
        color="success"
        onClick={() => {
          dispatch(addToCart(product));
          handleOpen();
        }}
      >
        <ShoppingCartIcon />
      </IconButton>
      <Drawer
        open={open}
        anchor="right"
        onClose={handleClose}
        sx={{ px: 3 }}
        PaperProps={{
          sx: { width: { md: "30%", xs: "70%" }, p: 5 },
        }}
      >
        {cartItems.length <= 0 && (
          <Stack alignItems="center">
            <Typography>No items in cart</Typography>
          </Stack>
        )}

        <Grid container display="flex" flexDirection="column">
          {cartItems.map((item) => (
            <Box key={item._id}>
              <Grid item>
                <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
                <Typography sx={{ fontSize: 14 }}>{item.category}</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  KES {item.price}
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Button
                    variant="outlined"
                    onClick={() => dispatch(addQuantity(item))}
                  >
                    <Typography>+</Typography>
                  </Button>
                  <Typography>{item.quantity}</Typography>

                  <Button
                    disabled={item.quantity === 1}
                    sx={{ cursor: "pointer" }}
                    onClick={() => dispatch(decreaseQuantity(item))}
                    variant="outlined"
                  >
                    -
                  </Button>
                  <IconButton onClick={() => dispatch(deleteProduct(item._id))}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Grid>
            </Box>
          ))}
        </Grid>
        {/* {cartItems.length <= 0 ? (
          <Stack alignItems="center">
            <Typography>No items in cart</Typography>
          </Stack>
        ) : (
          cartItems.map((item) => (
            // <Stack key={item._id} pb={2}>
            //   <Box>
            //     <Divider />

            //     <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
            //     <Typography sx={{ fontSize: 14 }}>{item.category}</Typography>
            //     <Typography sx={{ fontWeight: "bold" }}>
            //       KES {item.price}
            //     </Typography>
            //   </Box>
            //   <Stack direction="row" spacing={1} alignItems="center">
            //     <Button variant="outlined" onClick={() => dispatch(addQuantity(item))}>
            //       <Typography>+</Typography>
            //     </Button>
            //     <Typography>{item.quantity}</Typography>

            //     <Button
            //       disabled={item.quantity === 1}
            //       sx={{ cursor: "pointer" }}
            //       onClick={() => dispatch(decreaseQuantity(item))}
            //       variant="outlined"
            //     >
            //       -
            //     </Button>
            //     <IconButton onClick={() => dispatch(deleteProduct(item._id))}>
            //       <DeleteIcon />
            //     </IconButton>
            //   </Stack>
            // </Stack>
          )) 
        )}*/}
      </Drawer>
    </Box>
  );
};

export default CartSummary;
