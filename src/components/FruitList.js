import React, { useEffect, useState } from "react";
import FruitCard from "./FruitCard";
import { Container, Grid } from "@material-ui/core";

const base_url = "https://api.predic8.de";

const FruitList = () => {
  const [fruits, setFruits] = useState([]);

  const getFruits = async () => {
    const res = await fetch("https://api.predic8.de/shop/products/?limit=10");
    const data = await res.json();

    console.log(data);

    function createFruitsObject(products) {
      products.forEach(async (fruit) => {
        const res = await fetch(`https://api.predic8.de${fruit.product_url}`);
        const data = await res.json();
        setFruits((currentList) => [...currentList, data]);
      });
    }
    createFruitsObject(data.products);
    console.log(data.products);
  };

  useEffect(() => {
    getFruits();
  }, []);

  return (
    <Container>
      <h1>Fruit Store</h1>
      <Grid container spacing={2}>
          {fruits.map((fruitState, index) => (
            <Grid item xs={12} md={6} lg={3}>
            <FruitCard
              key={index}
              image={`${base_url}${fruitState.photo_url}`}
              name={fruitState.name}
              price={fruitState.price}
            />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default FruitList;
