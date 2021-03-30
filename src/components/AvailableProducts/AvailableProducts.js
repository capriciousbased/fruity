import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import AvailableProductsTable from "./AvailableProductsTable";
import ProductCard from "./ProductCard";
import "./AvailableProducts.css";

const AvailableProducts = (props) => {
  const url = "https://api.predic8.de";

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //get products from API
  const getProducts = async () => {
    const res = await axios.get(url + "/shop/products/");
    const allProducts = res.data.products;

    const getPriceUrl = await allProducts.map((product) => {
      return url + product.product_url;
    });
    //promises for every url
    const getPrice = await getPriceUrl.map((url) => {
      return axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    });

    axios.all(getPrice).then((res) => setProducts(res));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="table">
      <SearchBar
        products={products}
        onSearch={handleSearch}
        searchTerm={searchTerm}
      />
      <h1>List of available products</h1>
      <ProductCard searchTerm={searchTerm} products={products} url={url} />
      <h1>Product List</h1>
      <AvailableProductsTable
        searchTerm={searchTerm}
        products={products}
        url={url}
      />
    </div>
  );
};

export default AvailableProducts;
