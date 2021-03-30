import React from "react";
import _ from "lodash";
import "./AvailableProducts.css";

const ProductCard = (props) => {
  const { searchTerm, products, url } = props;
  const capitalized = products.map((element) => {
    return {
      name: _.capitalize(element.name),
      photo_url: element.photo_url,
      category_url: element.category_url,
      price: element.price,
    };
  });

  const filtered = _.uniqBy(capitalized, (element) => element.name);
  console.log(filtered);
  return (
    <div className="allCards">
      {filtered
        .filter((value) => {
          if (value === "") {
            return value;
          } else if (
            value.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        })
        .map((product, index) => {
          return (
            <div className="productCard" key={index}>
              <img
                src={url + product.photo_url}
                className="productImage"
                alt="not available"
              />
              <div className="text">
                <div className="first">
                  <h2>{product.name}</h2>
                  <p>Price: {product.price} € </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;
