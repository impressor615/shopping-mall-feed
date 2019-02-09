import enzyme from "enzyme";
import React from "react";

import Badge from "@/components/Badge";
import RankItem from "@/components/RankItem";

describe("RankItem", () => {
  const rank = 1;
  const shopName = "name";
  const shopTags = "tag1, tag2";
  const imgSrc = "img";
  const url = "url";
  it("should render Badge, img, rank-desc", () => {
    const Component = (
      <RankItem
        url={url}
        rank={rank}
        name={shopName}
        tags={shopTags}
        imgSrc={imgSrc}
      />
    );
    const wrapper = enzyme.shallow(Component);
    expect(wrapper.find(Badge)).toHaveLength(1);
    expect(wrapper.find("img")).toHaveLength(1);
    expect(wrapper.find(".rank-desc")).toHaveLength(1);
  });

  it("should be matched with snapshot", () => {
    const Component = (
      <RankItem
        url={url}
        rank={rank}
        name={shopName}
        tags={shopTags}
        imgSrc={imgSrc}
      />
    );
    const wrapper = enzyme.shallow(Component);
    expect(wrapper).toMatchSnapshot();
  });
});
