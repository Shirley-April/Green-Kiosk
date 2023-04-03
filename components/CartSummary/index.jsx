import {
  Typography,
  Box,
  Dialog,
  IconButton,
  Drawer,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addQuantity, decreaseQuantity, deleteProduct } from "../Cart/cartSlice";

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
          sx: { width: {md: "30%", xs: "70%"}, p: 5 },
        }}
      >
        {cartItems.map((item) => (
          <Stack key={item._id} pb={2}>
            <Divider />

            <Typography>{item.name}</Typography>
            <Typography>{item.category}</Typography>
            <Typography>{item.price}</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box border={1} p={1} onClick={() => dispatch(addQuantity(item))}>
                +
              </Box>
              <Typography>{item.quantity}</Typography>

              <Button
                disabled={item.quantity === 1}
                sx={{cursor: "pointer"}}
                onClick={() => dispatch(decreaseQuantity(item))}
              >
                -
              </Button>
              <IconButton onClick={() => dispatch(deleteProduct(item._id))}><DeleteIcon/></IconButton>

            </Stack>
          </Stack>
        ))}
      </Drawer>
    </Box>
  );
};

export default CartSummary;
