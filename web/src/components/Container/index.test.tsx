import enzyme from "enzyme";
import React from "react";

import Container from "@/components/Container";

describe("Container", () => {
  const children = <div>children</div>;
  it("should render children", () => {
    const wrapper = enzyme.shallow(<Container>{ children }</Container>);
    expect(wrapper.find(".container")).toHaveLength(1);
    expect(wrapper.contains(children)).toEqual(true);
  });

  it("should be matched with snapshot", () => {
    const wrapper = enzyme.shallow(<Container>{ children }</Container>);
    expect(wrapper).toMatchSnapshot();
  });
});
