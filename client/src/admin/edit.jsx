import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import style from "./admin.module.css";
import Sidbar from "./components/Sidbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [Name, setName] = useState("");
  const [Cover, setCover] = useState("");
  const [Image, setImage] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [Slug, setSlug] = useState("");
  const [Price, setPrice] = useState("");
  const [brandLogo, setBrandLogo] = useState("");
  const [DisPrice, setDisPrice] = useState("");
  const [Brand, setBrand] = useState("");
  console.log(Cover);
  const { id } = useParams();
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/products/${id}`, {
        Name,
        Cover,
        Category,
        Description,
        Price,
        Slug,
        // Image: image,
        Brand,
        // BrandLogo: brandLogo,
        DisPrice,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const HandleImg = (e) => {
    const file = e.target.files[0];
    imgTransform(file);
  };
  const HandleCover = (e) => {
    const image = e.target.files[0];
    coverTransform(image);
  };
  const imgTransform = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } else {
      setImage("");
    }
  };
  const coverTransform = (image) => {
    const reader = new FileReader();
    if (image) {
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setCover(reader.result);
      };
    } else {
      setCover("");
    }
  };
  return (
    <div className={style.Dashbord}>
      <Container className="container-fluid d-flex justify-content-center">
        <Form id={style.Form} className="w-50" onSubmit={handleUpdate}>
          <FormGroup>
            <FormControl
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Title"
            />
          </FormGroup>
          <FormLabel className="d-flex align-items-center bg-light rounded  ">
            <span>Brand Logo</span>
            <FormGroup>
              <FormControl
                type="file"
                value={brandLogo}
                onChange={HandleImg}
                // placeholder="Bedroom"
              />
            </FormGroup>
          </FormLabel>
          <FormGroup>
            <FormControl
              type="text"
              value={Brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Brand"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              value={DisPrice}
              onChange={(e) => setDisPrice(e.target.value)}
              placeholder="Discount Price"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              type="text"
              value={Slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="slug"
            />
          </FormGroup>
          <FormLabel className="d-flex align-items-center bg-light rounded  ">
            <span className="px-2">Cover image</span>
            <FormGroup>
              <FormControl
                type="file"
                accept="image/"
                onChange={HandleCover}
                placeholder="Cover Url"
              />
            </FormGroup>
          </FormLabel>
          <FormLabel className="d-flex align-items-center bg-light rounded  ">
            <span>Image</span>
            <FormGroup className="px-5 mx-2">
              <FormControl
                type="file"
                accept="image/"
                multiple="true"
                onChange={HandleImg}
                placeholder="Cover Url"
              />
            </FormGroup>{" "}
          </FormLabel>

          <Button
            type="Submit"
            // onClick={handleSubmit}
            variant="outline-primary"
          >
            <h4>Update</h4>
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Edit;
