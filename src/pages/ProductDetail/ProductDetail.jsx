import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import "./productDetail.scss";
import { useDispatch} from "react-redux";
import { loadingActions } from "../../redux/features/LoadingSlice";
import { cartActions } from "../../redux/features/cartSlice";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    dispatch(loadingActions.setLoadingTrue());
    const docRef = doc(db, "products", params.id);
    const fetchDocById = () => {
      getDoc(docRef)
        .then((doc) => {
          setProduct(doc.data(), doc.id);
          dispatch(loadingActions.setLoadingFalse());
        })
        .catch((err) => console.log(err));
    };
    fetchDocById();
  }, [dispatch,params.id]);
  return (
    <div className="productDetail">
      <div className="image">
        <img src={product.img} alt="" />
      </div>
      <div className="detail-right">
        <h1 style={{fontFamily: 'Fuzzy Bubbles'}}>{product.name}</h1>
        <p>{product.desc}</p>
        <h2>color options</h2>
        <div className="colors">
          <div style={{ backgroundColor: "#9A5555",cursor:'pointer'}}></div>
          <div style={{ backgroundColor: "#4FA999",cursor:'pointer'}}></div>
          <div style={{ backgroundColor: "#371A8C", cursor:'pointer'}}></div>
          <div style={{ backgroundColor: "#0C0000" ,cursor:'pointer'}}></div>
        </div>
        <h3>price: {product.price} birr</h3>
        <div className="bottom">
          <input
            type="number"
            min="1"
            step="1"
            placeholder="1"
            onChange={(e)=>setQuantity(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(
                cartActions.addToCart({
                  id: params.id,
                  name: product.name,
                  img: product.img,
                  price: Number(product.price),
                  quantity: quantity,
                })
              );
             }
            }
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <button
        style={{
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          fontSize: "15px",
          cursor: "pointer",
          width:"50%",
          marginLeft:"20%",
          borderRadius:"10px"
        }}
        onClick={() => navigate(-1)}
      >
        back to shopping
      </button>
    </div>
  );
};

export default ProductDetail;
