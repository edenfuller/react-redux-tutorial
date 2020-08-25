import React from "react";

import ProductListing from "./ProductListing";

import chairImg from "../assets/apparlo_chair.webp";
import tableImg from "../assets/apparlo_table.webp";

const Inventory = (p) => {
  const products = [
    { name: "table", img: tableImg, title: "ÄPPLARÖ" },
    { name: "chair", img: chairImg, title: "ÄPPLARÖ" },
  ];

  const productListings = products.map((product, i) => {
    return <ProductListing {...products[i]} key={`product-listing-${i}`} />;
  });

  return <div className="inventory">{productListings}</div>;
};

export default Inventory;
