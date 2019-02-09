import enzyme from "enzyme";
import React from "react";

import Header from "@/components/Header";
import HeaderFilter from "@/components/HeaderFilter";
import HeaderTitle from "@/components/HeaderTitle";

describe("Header", () => {
  const filter = "products";
  const onClick = jest.fn();
  it("should render HeaderTitle and HeaderFilter", () => {
    const wrapper = enzyme.shallow(<Header filter={filter} onClick={onClick} />);
    expect(wrapper.find(HeaderFilter)).toHaveLength(1);
    expect(wrapper.find(HeaderTitle)).toHaveLength(1);
  });

  it("should be matched with snapshot", () => {
    const wrapper = enzyme.shallow(<Header filter={filter} onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
  });
});
