import enzyme from "enzyme";
import React from "react";

import Header from "@/components/Header";
import HeaderFilter from "@/components/HeaderFilter";
import HeaderTitle from "@/components/HeaderTitle";

describe("Header", () => {
  const filter = "products";
  it("should render HeaderTitle and HeaderFilter", () => {
    const wrapper = enzyme.shallow(<Header filter={filter} />);
    expect(wrapper.find(HeaderFilter)).toHaveLength(1);
    expect(wrapper.find(HeaderTitle)).toHaveLength(1);
  });

  it("should be matched with snapshot", () => {
    const wrapper = enzyme.shallow(<Header filter={filter} />);
    expect(wrapper).toMatchSnapshot();
  });
});
