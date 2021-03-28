import React, { useEffect, useState } from "react";
import FruitCard from "./FruitCard";

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
    <div className="app-container">
      <h1>Fruit Store</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {fruits.map((fruitState, index) => (
            <FruitCard
              key={index}
              image={`${base_url}${fruitState.photo_url}`}
              name={fruitState.name}
              price={fruitState.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FruitList;
