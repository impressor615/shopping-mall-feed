import "./index.scss";

import React from "react";

import ProductItem from "@/components/ProductItem";

class ProductsGrid extends React.PureComponent<ProductState, {}> {
  [key: string]: any;

  public componentDidMount() {
    window.addEventListener("resize", this.lazyUpdateLayout);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.lazyUpdateLayout);
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
                onLoad={this.waitAndUpdateLayout}
              />
            );
          })
        }
      </div>
    );
  }

  public waitAndUpdateLayout = () => {
    const { data } = this.props;
    this.loadedImages = !this.loadedImages ? 1 : this.loadedImages + 1;
    if (this.loadedImages !== data.length) return;
    this.updateLayout();
  }

  private getLayoutInfo = () => {
    const containerWidth = document.getElementsByClassName("container")[0].clientWidth;
    const isPC = containerWidth > 768;
    const columnCount = isPC ? 3 : 2;
    const gutter = isPC ? 5 : 3;
    const gutterCount = columnCount - 1;
    const widthDiff = (gutter * gutterCount) / columnCount;
    const columnHeights = Array(columnCount).fill(0);

    return {
      columnCount,
      columnHeights,
      containerWidth,
      gutter,
      gutterCount,
      widthDiff,
    };
  }

  private updateWidth = () => {
    const {
      columnCount,
      containerWidth,
      widthDiff,
    } = this.getLayoutInfo();
    const { data } = this.props;
    Array.from({ length: data.length }).forEach((_, index) => {
      const { itemRef: currentItem } = this[`img${index}`].current;
      const { current } = currentItem;
      current.style.width = `${(containerWidth / columnCount) - widthDiff}px`;
    });
  }

  private updatePosition = () => {
    const {
      columnCount,
      containerWidth,
      widthDiff,
      gutter,
      gutterCount,
      columnHeights,
    } = this.getLayoutInfo();
    const { data } = this.props;
    Array.from({ length: data.length }).forEach((_, index) => {
      const dividend = index % columnCount;
      const left = dividend * ((containerWidth / columnCount) + (widthDiff / gutterCount));
      const { itemRef: currentItem } = this[`img${index}`].current;
      const { current } = currentItem;
      if (index < columnCount) {
        current.style.top = "0px";
        current.style.left = `${left}px`;
        return;
      }

      let columnHeight = columnHeights[dividend];
      const itemAboveIndex = index - columnCount;
      const { itemRef: itemAbove } = this[`img${itemAboveIndex}`].current;
      const { height } = itemAbove.current.getBoundingClientRect();
      columnHeight += height + gutter;
      current.style.top = `${columnHeight}px`;
      current.style.left = `${left}px`;
      columnHeights[dividend] = columnHeight;
    });
  }

  private updateLayout = () => {
    this.updateWidth();
    this.updatePosition();
  }

  private lazyUpdateLayout = () => {
    if (this.updateLayoutTimer) {
      clearTimeout(this.updateLayoutTimer);
    }

    this.updateWidth();
    this.updateLayoutTimer = setTimeout(this.updatePosition, 300);
  }
}

export default ProductsGrid;
