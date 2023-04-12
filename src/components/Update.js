import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Update = ({ products }) => {
  const { id } = useParams();
  //   const products = useSelector((state) => state.test.products);

  //   const product = products.find((obj) => obj.id === id);
  useEffect(() => {
    console.log(products);
  }, []);
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="name@example.com"
          //   defaultValue={product.name}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="name@example.com"
          //   defaultValue={product.price}
        />
      </FloatingLabel>
    </>
  );
};

export default Update;
