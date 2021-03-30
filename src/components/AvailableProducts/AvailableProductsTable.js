import React from "react";
import _ from "lodash";
import "./AvailableProducts.css";

const AvailableProductsTable = (props) => {
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

  return (
    <table className="contentTable">
      <thead>
        <tr>
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
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
              <tr key={index}>
                <th>
                  <img
                    className="image"
                    src={url + product.photo_url}
                    alt="Not Available"
                  ></img>
                </th>
                <th>{product.name} </th>
                <th>{product.price.toFixed(2) + " €"} </th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default AvailableProductsTable;
