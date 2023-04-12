import { Alert } from "bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { supprimerTest, update } from "../redux/slices/testSlice";

const Product = ({ product, bought }) => {
  const [idp, setIdp] = useState(0);
  const [newLike, setNewlike] = useState(product.like);
  const dispatch = useDispatch();
  const handleLike = () => {
    setNewlike(newLike + 1);
  };
  const supprimer = (id) => {
    console.log(id);
    dispatch(supprimerTest(id));
  };
  const modifier = (id) => {
    console.log(id);
    dispatch(update(id));
  };

  return (
    <Card style={{ width: "18rem" }} className={newLike > 5 && `bestProduct`}>
      {/* <Card.Img
        variant="top"
        src={require(`../assets/images/${product.img}`)}
      /> */}
      <Card.Body>
        <Card.Title>
          <NavLink to={`/products/details/${product.id}`}>
            {product.name}
          </NavLink>
        </Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Card.Text>likes : {newLike}</Card.Text>
        <Button variant="primary" onClick={handleLike}>
          Like
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            supprimer(product.id);
          }}
        >
          Supprimer
        </Button>
        <Button
          variant="primary"
          as={NavLink}
          to={`/products/update/${product.id}`}
          onClick={() => {
            modifier(product.id);
          }}
        >
          update
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
