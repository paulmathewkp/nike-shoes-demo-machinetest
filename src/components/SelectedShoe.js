import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Button,
} from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { useParams } from "react-router";
import "../app1.scss";
import { ShoesContext } from "../context/ShoesContext";

import ForAllSizes from "../components/ForAllSizes";
const SelectedShoe = ({ shoesList }) => {
  const { setBadgeValue, cartItems, setCartItems, setTotalPrice } =
    useContext(ShoesContext);
  const { id } = useParams();
  const shoe = shoesList[id];
  console.log("shoesList", shoesList);

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const addValueListner = () => {
    if (shoe.itemsLeft > 0) {
      setBadgeValue((prevBadgeValue) => ++prevBadgeValue);
      cartItems !== null
        ? setCartItems([
            ...cartItems,
            {
              id,
              img: shoe.img,
              name: shoe.name,
              price: shoe.price,
              itemsLeft: shoe.itemsLeft,
            },
          ])
        : setCartItems([
            {
              id,
              img: shoe.img,
              name: shoe.name,
              price: shoe.price,
              itemsLeft: shoe.itemsLeft,
            },
          ]);
      setTotalPrice((prevPrice) => (prevPrice += shoe.price));
      shoe.itemsLeft -= 1;
    }
  };
  const diffSize = shoe.name === "RACER BLUE" || "VALOUR BLUE";

  return (
    <div className="selected-shoe">
      <Typography
        className="font"
        align="center"
        style={{ marginTop: "20px" }}
        gutterBottom
        variant="h5"
      >
        Selected Shoe
      </Typography>
      <div className="selected shoe wrapper">
        <Card className="selected-shoe-card">
          <CardActionArea className="card-action">
            <CardMedia
              component="img"
              height="350"
              alt={shoe.name}
              image={shoe.img}
            />
          </CardActionArea>
          <CardContent className="card-content">
            <Typography gutterBottom variant="h6" className="font">
              {shoe.name}
            </Typography>
            <Typography gutterBottom variant="body2" className="font">
              PRICE {shoe.price}
            </Typography>
            <Typography gutterBottom variant="body2" className="font">
              ITEMS LEFT {shoe.itemsLeft}
            </Typography>
            <Button
              onClick={(e) => addValueListner()}
              style={{ marginTop: "30px", width: "100%" }}
              size="small"
              className="font"
              variant="outlined"
              color="secondary"
              startIcon={<ShoppingCartOutlined />}
            >
              ADD To CART
            </Button>
          </CardContent>
        </Card>
      </div>
      {diffSize && <ForAllSizes />}
    </div>
  );
};

export default SelectedShoe;
