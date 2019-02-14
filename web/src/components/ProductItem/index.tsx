import "./index.scss";

import React from "react";

interface ProductItemProps {
  url: string;
  imgSrc: string;
  price: number;
  name: string;
  shopName: string;
  big?: boolean;
  onLoad?: () => void;
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
);

class ProductItem extends React.PureComponent<ProductItemProps, {}> {
  private itemRef = React.createRef<HTMLAnchorElement>();
  public render() {
    const {
      url,
      imgSrc,
      price,
      name,
      shopName,
      big,
      onLoad,
    } = this.props;
    return (
      <a
        href={url}
        target="_blank"
        ref={this.itemRef}
        className="product-item"
      >
        <img
          alt="product"
          src={imgSrc}
          onLoad={onLoad}
        />
        <ProductDescription
          price={price}
          big={big}
          name={name}
          shopName={shopName}
        />
      </a>
    );
  }
}

export default ProductItem;
