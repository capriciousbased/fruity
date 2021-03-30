import React, { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabProducts from "./TabProducts";
import { makeStyles } from "@material-ui/core/styles";
import ProductTabContent from "./ProductTabContent";
import "./ProductsTabBar.module.css";

const useStyles = makeStyles((theme) => ({
  demo2: {
    backgroundColor: "#009879",
    width: "60%",
    margin: "auto",
    color: "white",
  },
  table: {
    width: "60%",
  },
}));

const ProductsTabBar = (props) => {
  const url = "https://api.predic8.de";

  const classes = useStyles();
  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  const getCategories = async () => {
    const res = await axios.get("https://api.predic8.de/shop/categories/");
    const categories = res.data.categories;
    const filtered = await categories.filter((element) => {
      return element.hasOwnProperty("name") && isNaN(element.name);
    });
    const categorieUrl = filtered.map((element) => {
      return url + element.category_url;
    });
    const getproductsByCategorie = await categorieUrl.map((url) => {
      return axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    });

    await axios
      .all(getproductsByCategorie)
      .then((res) => setAllCategories(res));
    setLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleTabs = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <div className={classes.demo2}>
          <Tabs onChange={handleTabs} value={tabValue} variant="standard">
            {allCategories.map((category, index) => {
              return <Tab label={category.name} key={index}></Tab>;
            })}
            <Tab label="All Products" />
          </Tabs>
          {allCategories.map((category, index) => {
            return (
              <ProductTabContent
                key={index}
                value={tabValue}
                data={category.products}
                index={index}
              />
            );
          })}
          <TabProducts
            value={tabValue}
            data={allCategories}
            index={allCategories.length}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsTabBar;
