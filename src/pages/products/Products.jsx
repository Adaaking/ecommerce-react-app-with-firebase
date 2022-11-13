
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { Link,useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { loadingActions } from "../../redux/features/LoadingSlice";
import Product from "./Product";
import "./products.scss";
const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const navigate = useDispatch()
  const params = useParams();
  useEffect(() => {
    dispatch(loadingActions.setLoadingTrue())
    const docRef = collection(db, "products");
    const fetchData = () => {
      getDocs(docRef)
        .then((snapshot) => {
          let products = [];
          snapshot.docs.forEach((doc) => {
            products.push({
              ...doc.data(),
              id: doc.id,
            });
            localStorage.setItem('products',JSON.stringify(products))
            const NewProducts = products.filter(
              (product) => product.category === params.category
            );
            setProducts(NewProducts);
            dispatch(loadingActions.setLoadingFalse())
          });
        })
      .catch((err) =>{
        dispatch(loadingActions.setLoadingFalse());
        navigate('/')
      });
    };
    fetchData();
  }, [params.category,dispatch,navigate]);
  return (
    <div className="productContainer">
      <h2 style={{marginLeft:"3rem",fontFamily: 'Fuzzy Bubbles'}}>{params.category}</h2>
      <div className="products">
        {products.map((product, indx) => (
          <Link to={`${product.id}`} key={indx} >
            <Product product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
