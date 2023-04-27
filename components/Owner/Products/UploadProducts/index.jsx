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

  
  const initialValues = {
    file: null,
    name: "",
    price: "",
    description: "",
    category: "",
    "in-stock": "",
  };

  const [selectedFile, setSelectedFile] = useState(null);

  console.log(selectedFile);

  const onFileChange = (event) => {
    setSelectedFile({ selectedFile: event.target.files[0] });

    //    const file = e.target.files[0];

  };

  const handleFile = async (file) => {
    const base64 = await toBase64(file)
    return base64
  }

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };


  const handleSubmit = async (values) => {
    const formdata = new FormData();
    const base64 = await toBase64(selectedFile.selectedFile);
    formdata.append("payins_csv", base64);
  
    Object.entries(values).forEach(([key, value]) => {
      formdata.append(key, value);
    });
  
    const data = {};
    for (const [key, value] of formdata.entries()) {
      data[key] = value;
    }
  
    console.log(data);
    return data;
  };
  
//   const handleSubmit = (values) => {
//     var formdata = new FormData();

//     Object.entries(values).forEach(([key, value]) => {
//       formdata.append(key, value);
//     });

//     formdata.append("payins_csv", toBase64(selectedFile));

//     const data = {};
//     for (const [key, value] of formdata.entries()) {
//       data[key] = value;
//     }

//     console.log(data);
//     return data;
//   };



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
            <Form>
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
                <TextField
                  name="in-stock"
                  type="file"
                  placeholder="In-Stock"
                  onChange={(e) => handleFile(e)}
                />
                <Button variant="outlined" type="submit">
                  Submit
                </Button>
              </Stack>
            </Form>
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
