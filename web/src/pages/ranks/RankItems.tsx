import React from "react";
import LazyLoad from "react-lazyload";

import RankItem from "@/components/RankItem";

const RankItems = ({ data }: RankState) => (
  <>
    {
      data.map((item, index) => (
        <LazyLoad
          once
          height={200}
          offset={100}
          key={item.id}
        >
          <RankItem
            name={item.name}
            tags={item.description}
            imgSrc={item.image.url}
            url={item.url}
            rank={index + 1}
          />
        </LazyLoad>
      ))
    }
  </>
);

export default RankItems;
