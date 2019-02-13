import enzyme from "enzyme";
import React from "react";

import { PureLoading as Loading } from "@/components/Loading";

describe("Loading", () => {
  it("should return loading div", () => {
    const wrapper = enzyme.shallow(<Loading loading={false} />);
    expect(wrapper.find(".loading")).toHaveLength(1);
  });

  it("should return loading div having active className", () => {
    const wrapper = enzyme.shallow(<Loading loading />);
    expect(wrapper.find(".loading.active")).toHaveLength(1);
  });

  it("should be matched with the snapshot", () => {
    const wrapper = enzyme.shallow(<Loading loading={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
