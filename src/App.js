import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajoutTest, getTest } from "./redux/slices/testSlice";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import Update from "./components/Update";

function App() {
  const [product, setProduct] = useState({
    name: "PC Lenovo",
    price: "1400",
    img: "product1.webp",
    like: 0,
    quantity: 10,
    description: "test",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTest());
  }, [dispatch]);

  const addProd = () => {
    dispatch(ajoutTest(product));
  };
  const products = useSelector((state) => state.test.products);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/products/update/:id"
          element={<Update products={products} />}
        />
      </Routes>
      <header className="App-header">
        <div className="flex-center">
          {products.map((product, index) => {
            return <Product product={product} key={index} />;
          })}
        </div>
        <button onClick={addProd}>add</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
