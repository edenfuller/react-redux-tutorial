import React from "react";

import ProductListing from "./ProductListing";

import chairImg from "../assets/apparlo_chair.webp";
import tableImg from "../assets/apparlo_table.webp";

const Inventory = (p) => {
  const images = { table: tableImg, chair: chairImg };
  const productNames = ["table", "chair"];

  const productListings = productNames.map((name, i) => {
    return <ProductListing img={images[name]} product={name} />;
  });

  return <div className="inventory">{productListings}</div>;
};

export default Inventory;
