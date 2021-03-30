import React from "react";
import _ from "lodash";
import "./ProductsTabBar.module.css";

const ProductTabContent = (props) => {
  // const data = props.data;
  const products = props.data;
  const value = props.index;
  const TabPanel = (props) => {
    const { children, value, index } = props;
    return <div>{value === index && children}</div>;
  };

  const capitalized = products.map((element) =>
    _.startCase(_.toLower(element.name))
  );
  const filtered = _.chain(capitalized)
    .union(capitalized)
    .filter(
      (element) =>
        element.length > 3 &&
        element.length < 18 &&
        !element.includes("Product")
    )
    .value();
  return (
    <TabPanel value={props.value} index={value}>
      <div className="tabContent">
        {filtered.map((element, index) => {
          return <p key={index}>{element}</p>;
        })}
      </div>
    </TabPanel>
  );
};

export default ProductTabContent;
