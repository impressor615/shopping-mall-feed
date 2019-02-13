import React from "react";

import RankItem from "@/components/RankItem";

const RankItems = ({ data }: RankState) => (
  <>
    {
      data.map((item, index) => (
        <RankItem
          key={item.id}
          name={item.name}
          tags={item.description}
          imgSrc={item.image.url}
          url={item.url}
          rank={index + 1}
        />
      ))
    }
  </>
);

export default RankItems;
