import enzyme from "enzyme";
import React from "react";

import HeaderTitle, { getToday } from "@/components/Headertitle";

describe("HeaderTitle", () => {
  const title = "오늘 뭐 입지?";
  it("should rendered texts should be matched with prop title", () => {
    const wrapper = enzyme.shallow(<HeaderTitle title={title} />);
    expect(wrapper.find(".header-title span:first-child").text()).toEqual(title);
  });

  it("should render today's date", () => {
    const today = getToday();
    const wrapper = enzyme.shallow(<HeaderTitle title={title} />);
    expect(wrapper.find(".header-title span:last-child").text()).toEqual(today);
  });

  it("should be matched with snapshot", () => {
    const wrapper = enzyme.shallow(<HeaderTitle title={title} />);
    expect(wrapper).toMatchSnapshot();
  });
});
