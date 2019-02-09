import enzyme from "enzyme";
import React from "react";

import Badge from "@/components/Badge";

describe("Badge", () => {
  it("should render gold badge", () => {
    const rank = 1;
    const wrapper = enzyme.shallow(<Badge rank={rank} />);
    expect(wrapper.text()).toEqual(rank.toString());
    expect(wrapper.find(".badge-gold")).toHaveLength(1);
  });

  it("should render silver badge", () => {
    const rank = 2;
    const wrapper = enzyme.shallow(<Badge rank={rank} />);
    expect(wrapper.text()).toEqual(rank.toString());
    expect(wrapper.find(".badge-silver")).toHaveLength(1);
  });

  it("should render bronze badge", () => {
    const rank = 3;
    const wrapper = enzyme.shallow(<Badge rank={rank} />);
    expect(wrapper.text()).toEqual(rank.toString());
    expect(wrapper.find(".badge-bronze")).toHaveLength(1);
  });

  it("should render normal rank", () => {
    const rank = 4;
    const wrapper = enzyme.shallow(<Badge rank={rank} />);
    expect(wrapper.text()).toEqual(rank.toString());
    expect(wrapper.find(".badge-gold")).toHaveLength(0);
    expect(wrapper.find(".badge-silver")).toHaveLength(0);
    expect(wrapper.find(".badge-bronze")).toHaveLength(0);
  });

  it("should be matched with snapshot", () => {
    const wrapper = enzyme.shallow(<Badge rank={1} />);
    expect(wrapper).toMatchSnapshot();
  });
});
