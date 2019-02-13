import "./index.scss";

import React from "react";

import ProductItem from "@/components/ProductItem";

class ProductsGrid extends React.PureComponent<ProductState, {}> {
  [key: string]: any;

  public componentDidMount() {
    this.updateLayout();
    window.addEventListener("load", this.updateLayout);
    window.addEventListener("resize", this.updateLayout);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateLayout);
    window.removeEventListener("load", this.updateLayout);
  }

  public render() {
    const { data } = this.props;
    return (
      <div className="products-grid">
        {
          data.map((item, index) => {
            const productRef = `img${index}`;
            this[productRef] = React.createRef<HTMLAnchorElement>();
            return (
              <ProductItem
                ref={this[productRef]}
                key={item.id}
                url={item.url}
                imgSrc={item.image.url}
                price={item.price}
                name={item.title}
                shopName={item.shopName}
              />
            );
          })
        }
      </div>
    );
  }

  private updateLayout = () => {
    const containerWidth = document.getElementsByClassName("container")[0].clientWidth;
    const isPC = containerWidth > 768;
    const columnCount = isPC ? 3 : 2;
    const gutter = isPC ? 5 : 3;

    const { data } = this.props;
    const columnHeights = Array(columnCount).fill(0);

    Array.from({ length: data.length }).forEach((_, index) => {
      const dividend = index % columnCount;
      const left = (dividend) * ((containerWidth / columnCount) + gutter);
      const { itemRef: currentItem } = this[`img${index}`].current;
      const { current } = currentItem;
      current.style.width = `calc(${100 / columnCount}% - ${gutter / columnCount}px)`;

      if (index < columnCount) {
        current.style.left = `${left}px`;
        return;
      }

      let columnHeight = columnHeights[dividend];
      const itemAboveIndex = index - columnCount;
      const { itemRef: itemAbove } = this[`img${itemAboveIndex}`].current;
      const { height } = itemAbove.current.getBoundingClientRect();
      columnHeight += height + gutter;
      current.style.left = `${left}px`;
      current.style.top = `${columnHeight}px`;
      columnHeights[dividend] = columnHeight;
    });
  }
}

export default ProductsGrid;
