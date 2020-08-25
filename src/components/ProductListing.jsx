import React from "react";
import AddRemoveCart from "./AddRemoveCart";

const ProductListing = (p) => {
  return (
    <article className="product-listing">
      <img src={p.img} />
      <section className="description">
        <h1>{p.title}</h1>
        <h3>{p.name}</h3>
        <AddRemoveCart name={p.name} />
      </section>
    </article>
  );
};

export default ProductListing;
