import React, { useState, useEffect } from "react";
import { db, storage } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MdFileUpload } from 'react-icons/md'
import "./addpro.scss";
import { uuidv4 } from "@firebase/util";

const AddProduct = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [perc, setPerc] = useState();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, `Images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "products"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate("/");
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={handleAddProduct}>
        <div>
          <label htmlFor="name">Product Name</label>
          <input
            id="name"
            type="text"
            required
            onChange={handleInput}
          />
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            type="text"
            required
            onChange={handleInput}
            rows="5"
          />
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            required
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select name="cars" id="category" onChange={handleInput}>
          <option value="___" defaultChecked>
              ----
            </option>
            <option value="Electronics">
              Electronics
            </option>
            <option value="Computers">Computers</option>
            <option value="Smart Home">Smart Home</option>
            <option value="Arts & Crafts">Arts</option>
            <option value="Men's fashion">Men's</option>
            <option value="Girl's fashion">Girl's</option>
            <option value="Boys fashion">Boys</option>
          </select>
          <label htmlFor="file">
          Image: <MdFileUpload className="icon"/>
          </label>
          <input
            className="custom-file-upload"
            id="file"
            type="file"
            placeholder="choose file"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit" className={
            perc<100? 'disabled':""
          }>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
