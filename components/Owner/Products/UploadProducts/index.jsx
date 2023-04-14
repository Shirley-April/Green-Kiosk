import { Dialog, Stack, Typography, Button } from "@mui/material";
import { useState } from "react";

const UploadProducts = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Stack justifyContent="flex-end" alignItems="flex-end" sx={{m: 2, pr: 5}}>
        <Button variant="contained" onClick={handleOpen}>New Product</Button>
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <Typography>Form Values in here</Typography>
      </Dialog>
    </Stack>
  );
};

export default UploadProducts;
