// import React, { useContext, useEffect, useState } from "react";
// import { store } from "../context/store";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const Product = () => {
//   const [product, setProduct] = useState([]);
//   const params = useParams();
//   const { Slug } = params;
//   const { products, loading, error, dispatch } = useContext(store);
//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch({ type: "fetchProduct" });
//       try {
//         const respons = await axios.get(
//           `http://localhost:5001/products/${Slug}`
//         );
//         dispatch({ type: "fetchSuccessful", payload: respons.data });
//         setProduct(respons.data);
//         console.log(respons.data);
//       } catch (error) {
//         // dispatch({ type: "fetchFail", payload: error.message });
//       }
//     };
//     fetchData();
//   }, [Slug]);

//   return <div></div>;
// };

// export default Product;
