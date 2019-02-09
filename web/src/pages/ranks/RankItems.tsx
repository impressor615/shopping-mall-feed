import React from "react";

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

        <RankItem
          name={item.name}
          tags={item.description}
          imgSrc={item.image.url}
          url={item.url}
          rank={index + 1}
          key={item.id}
        />
      ))
    }
  </>
);

export default RankItems;
