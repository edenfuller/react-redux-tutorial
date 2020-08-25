import React from "react";

const ProductListing = (p) => {
  return (
    <article className="product-listing">
      <img src={p.img} />
      <section className="description">
        <h1>{p.title}</h1>
        <h3>{p.name}</h3>
      </section>
    </article>
  );
};

export default ProductListing;
