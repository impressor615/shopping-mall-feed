import enzyme from "enzyme";
import React from "react";

import Button from "@/components/Button";
import HeaderFilter from "@/components/HeaderFilter";

describe("HeaderFilter", () => {
  const filter = "products";
  const onClick = jest.fn();
  it("should render two buttons and one button should be active at least", () => {
    const wrapper = enzyme.shallow(<HeaderFilter filter={filter} onClick={onClick} />);
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find(Button).first().props()).toHaveProperty("active", true);
  });

  it("onClick should be called when filter is clicked", () => {
    const wrapper = enzyme.shallow(<HeaderFilter filter={filter} onClick={onClick} />);
    wrapper.find(".header-filter").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("should be matched with snapshot", () => {
    const wrapper = enzyme.shallow(<HeaderFilter filter={filter} onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
  });
});
