import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { PokemonStatType } from "../models";

interface Props {
  stats: PokemonStatType[] | undefined;
}

const PokemonStats: React.FC<Props> = ({ stats }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={stats}>
          <PolarGrid />
          <PolarAngleAxis fontSize="12px" dataKey="name" />
          <PolarRadiusAxis fontSize="12px" />
          <Radar
            name="PokemonStats"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};

export default PokemonStats;
