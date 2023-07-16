import { useState, useEffect } from "react";

import axios from "axios";

import { Formik, Form, useField } from "formik";

import {
  Dialog,
  Stack,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";

const UploadProducts = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSubmit = (values) => {
  // var formdata = new FormData();
  // formdata.append("image", file);
  //   // let config = {
  //   //   method: "post",
  //   //   maxBodyLength: Infinity,
  //   //   url: "http://localhost:8080/add-product",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   data: values,
  //   // };

  //   // axios
  //   //   .request(config)
  //   //   .then((response) => {
  //   //     alert(JSON.stringify(response.data));
  //   //     console.log(JSON.stringify(response.data));
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  //   console.log("Values", values);
  // };

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageBase64, setImageBase46] = useState("");

  const initialValues = {
    file: "",
    name: "",
    price: "",
    description: "",
    category: "",
    "in-stock": "",
  };

  const onFileChange = (event) => {
    setSelectedFile({ selectedFile: event.target.files[0] });
  };

  const onFileUpload = () => {
    const file = selectedFile;

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };

    console.log("File base64", file);
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2))
  }


  return (
    <Stack>
      <Stack
        justifyContent="flex-end"
        alignItems="flex-end"
        sx={{ m: 2, pr: 5 }}
      >
        <Button variant="contained" onClick={handleOpen}>
          New Product
        </Button>
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <Stack p={3} justifyContent="center" alignItems="center" spacing={2}>
          <Typography>Add new Product</Typography>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values, setFieldValue }) => (
              <Form>
                {console.log("Inner values accessibility", values)}
                <Stack spacing={2}>
                  <FormInput
                    label="name"
                    name="name"
                    type="text"
                    placeholder="Product Name"
                  />
                  <FormInput
                    label="price"
                    name="price"
                    type="text"
                    placeholder="Price"
                  />
                  <FormInput
                    label="description"
                    name="description"
                    type="text"
                    placeholder="Product Description"
                  />
                  <FormInput
                    label="category"
                    name="category"
                    type="text"
                    placeholder="Category"
                  />
                  <FormInput
                    label="in-stock"
                    name="in-stock"
                    type="text"
                    placeholder="In-Stock"
                  />
                  {/* <TextField
                  name="in-stock"
                  type="file"
                  placeholder="In-Stock"
                  onChange={(e) => handleFile(e)}
                /> */}
                  <Button variant="outlined" type="submit">
                    Submit
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Dialog>
    </Stack>
  );
};

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return <TextField {...field} {...props} size="small" />;
};

export default UploadProducts;
