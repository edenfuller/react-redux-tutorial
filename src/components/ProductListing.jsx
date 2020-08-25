import React from "react";

const ProductListing = (p) => {
  return (
    <div className="product-listing">
      <img src={p.img} />
    </div>
  );
};

export default ProductListing;
