import enzyme from "enzyme";
import React from "react";

import HeaderFilter from "@/components/HeaderFilter";
import Link from "@/components/Link";

describe("HeaderFilter", () => {
  const filter = "products";
  it("should render two buttons and one button should be active at least", () => {
    const wrapper = enzyme.shallow(<HeaderFilter filter={filter} />);
    expect(wrapper.find(Link)).toHaveLength(2);
    expect(wrapper.find(Link).first().props()).toHaveProperty("active", true);
  });

  it("should be matched with snapshot", () => {
    const wrapper = enzyme.shallow(<HeaderFilter filter={filter} />);
    expect(wrapper).toMatchSnapshot();
  });
});
