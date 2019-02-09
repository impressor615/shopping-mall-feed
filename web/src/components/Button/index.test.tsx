import enzyme from "enzyme";
import React from "react";

import Button from "@/components/Button";

describe("Button", () => {
  const children = "Button";
  it("should render children", () => {
    const wrapper = enzyme.shallow(<Button>{ children }</Button>);
    expect(wrapper.find(".btn").text()).toEqual(children);
  });

  it("should render active button when active prop is true", () => {
    const wrapper = enzyme.shallow(<Button active>{ children }</Button>);
    expect(wrapper.find(".btn.active")).toHaveLength(1);
  });

  it("should call onClick function when button is clicked", () => {
    const onClick = jest.fn();
    const wrapper = enzyme.shallow(<Button onClick={onClick}>{ children }</Button>);
    wrapper.find("button").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("should be matched with snapshot", () => {
    const wrapper = enzyme.shallow(<Button>{ children }</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
