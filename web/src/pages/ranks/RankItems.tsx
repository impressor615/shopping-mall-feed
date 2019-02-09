import React from "react";
import LazyLoad from "react-lazyload";

import RankItem from "@/components/RankItem";

interface RankItemsProps {
  data: Array<{
    id: string;
    name: string;
    description: string;
    image: { url: string; };
    url: string;
  }>;
}

const RankItems = ({ data }: RankItemsProps) => (
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
