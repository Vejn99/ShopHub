import React from "react";
import ProductItem, { ProductProps } from "./ProductItem";

export interface RelatedProducts {
  productItems: ProductProps[];
}
const RelatedProducts = ({ productItems }: RelatedProducts) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            <ProductItem productItems={productItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
