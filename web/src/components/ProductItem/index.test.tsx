import enzyme from "enzyme";
import React from "react";

import ProductItem, { ProductDescription } from "@/components/ProductItem";

describe("ProductItem", () => {
  it("should render img and ProductionDescription", () => {
    const Component = (
      <ProductItem
        url="url"
        imgSrc="image"
        price={10000}
        name="product-name"
        shopName="shop-name"
      />
    );
    const wrapper = enzyme.shallow(Component);
    expect(wrapper.find(ProductDescription)).toHaveLength(1);
    expect(wrapper.find(".product-item")).toHaveLength(1);
    expect(wrapper.find("img")).toHaveLength(1);
  });

  it("should render product-desc when big is true", () => {
    const Component = (
      <ProductItem
        big
        url="url"
        imgSrc="image"
        price={10000}
        name="product-name"
        shopName="shop-name"
      />
    );

    const wrapper = enzyme.mount(Component);
    expect(wrapper.find(".product-desc")).toHaveLength(1);
  });

  it("should be matched with snapshot", () => {
    const Component = (
      <ProductItem
        url="url"
        imgSrc="image"
        price={10000}
        name="product-name"
        shopName="shop-name"
      />
    );
    const wrapper = enzyme.mount(Component);
    expect(wrapper).toMatchSnapshot();
  });
});
