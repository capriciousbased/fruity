import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(" ");

  const url = "https://api.predic8.de/shop/products/";

  const getProduct = () => {
    axios.get(url + { id }).then((res) => {
      const singleProduct = res.data;
      setProduct(res.data);
      console.log(singleProduct);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="event-details">
      <>
        <div className="product-info">
          <h4 className="bolder">{product.name}</h4>
          <span>
            <b>price:</b>
            {product.date}
          </span>
        </div>
      </>
      )}
    </div>
  );
}

export default ProductDetails;
