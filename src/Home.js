import React from "react";
import AvailableProducts from "./components/AvailableProducts/AvailableProducts";
import ProductsTabBar from "./components/ProductListTab/ProductsTabBar";

function Home() {
  return (
    <div>
      <AvailableProducts />
      <ProductsTabBar />
    </div>
  );
}

export default Home;
