import "./index.scss";

import React from "react";

import Badge from "@/components/Badge";

interface RankItemProps {
  rank: number;
  name: string;
  tags: string;
  imgSrc: string;
  url: string;
}

const RankItem = ({ rank, name, tags, imgSrc, url }: RankItemProps) => (
  <a className="rank-item" href={url} target="_blank">
    <Badge rank={rank} />
    <img src={imgSrc} alt="mall-title" />
    <div className="rank-desc">
      <h3>{ name }</h3>
      <p>{ tags }</p>
    </div>
  </a>
);

export default RankItem;
