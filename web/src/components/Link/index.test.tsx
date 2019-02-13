import enzyme from "enzyme";
import React from "react";

import Link from "@/components/Link";

describe("Link", () => {
  const children = "link";
  it("should render children", () => {
    const wrapper = enzyme.shallow(<Link to="/products">{ children }</Link>);
    expect(wrapper.find(".link").children().text()).toEqual(children);
  });

  it("should render active link when active prop is true", () => {
    const wrapper = enzyme.shallow(<Link active to="/products">{ children }</Link>);
    expect(wrapper.find(".link.active")).toHaveLength(1);
  });

  it("should be matched with snapshot", () => {
    const wrapper = enzyme.shallow(<Link to="/products">{ children }</Link>);
    expect(wrapper).toMatchSnapshot();
  });
});
