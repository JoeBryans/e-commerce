// import React, { useContext } from 'react'
import style from "./admin.module.css";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  FormFloating,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import Sidbar from "./components/Sidbar";
import { useState } from "react";
import axios from "axios";
const Add = () => {
  const [Name, setName] = useState("");
  const [Cover, setCover] = useState("");
  const [Image, setImage] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [shorDescription, setShorDescription] = useState("");
  const [Slug, setSlug] = useState("");
  const [Price, setPrice] = useState("");
  const [brandLogo, setBrandLogo] = useState("");
  const [DisPrice, setDisPrice] = useState("");
  const [Brand, setBrand] = useState("");
  console.log(Cover);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Cover", Cover);
    formData.append("Category", Category);
    formData.append("Description", Description);
    formData.append("Price", Price);
    formData.append("Slug", Slug);
    formData.append("Brand", Brand);
    formData.append("DisPrice", DisPrice);
    // formData.append("Brand",Brand)
    //  BrandLogo: brandLogo, formData.append("Brand",Brand)
    try {
      await axios.post("http://localhost:5000/products/create", formData);
    } catch (error) {
      console.log(error);
    }
  };
  const HandleImg = (e) => {
    const file = e.target.files[0];
    // imgTransform(file);
  };
  const HandleCover = (e) => {
    const image = e.target.files[0];
    // coverTransform(image);
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
      <Container className="flex justify-around gap-5 items-center">
        {" "}
        ,
        {/*title,
        properties
         cover,
        image,
        category,
        description,
        bedroom,
        price,
        houseType,
        location, */}
        <Form
          id={style.Form}
          className=" flex-1 bg-transparent"
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <FormControl
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Title"
            />
          </FormGroup>
          {/* <FormLabel className="d-flex align-items-center bg-light rounded  ">
            <span>Brand Logo</span>
            <FormGroup>
              <FormControl
                type="file"
                value={brandLogo}
                onChange={HandleImg}
                // placeholder="Bedroom"
              />
            </FormGroup>
          </FormLabel> */}
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
          {/* <FormLabel className="d-flex align-items-center bg-light rounded  ">
            <span>Image</span>
            <FormGroup className="px-5 mx-2">
              <FormControl
                type="file"
                accept="image/"
                multiple={true}
                onChange={HandleImg}
                placeholder="Cover Url"
              />
              {/*  <Button type='Submit' variant='outline-primary'>More Images</Button>
   <FormGroup> 
      <FormControl
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            /> 
            </FormGroup> 
            </FormGroup>{" "}
          </FormLabel> */}

          <Button
            type="Submit"
            // onClick={handleSubmit}
            variant="outline-primary"
          >
            <h4>Create</h4>
          </Button>
        </Form>
        <div className={style.preview}>
          {Cover ? (
            <>
              <img src={Cover} alt="" />
            </>
          ) : (
            <span>Image preview</span>
          )}
        </div>
        <div className={style.pre}>
          {Image ? (
            <>
              <img src={Image} alt="" />
              <img src={Image} alt="" />
              <img src={Image} alt="" />
            </>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default Add;
