import "./index.scss";

import React from "react";

interface ProductItemProps {
  url: string;
  imgSrc: string;
  price: number;
  name: string;
  shopName: string;
  big?: boolean;
}

interface ProductDescriptionProps {
  price: number;
  name: string;
  shopName: string;
  big?: boolean;
}

export const ProductDescription = ({ big, shopName, name, price }: ProductDescriptionProps) => (
  <>
    {
      big ? (
        <div className="product-desc">
          <div>{ `#${shopName}` }</div>
          <div>{ name }</div>
        </div>
      ) : <div className="product-price">{ `${price.toLocaleString()}원` }</div>
    }
  </>
)

const ProductItem = ({ url, imgSrc, price, name, shopName, big }: ProductItemProps) => (
  <a className="product-item" href={url} target="_blank">
    <img src={imgSrc} alt="product" />
    <ProductDescription
      price={price}
      big={big}
      name={name}
      shopName={shopName}
    />
  </a>
);

export default ProductItem;
