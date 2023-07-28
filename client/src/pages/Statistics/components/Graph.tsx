import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { IEventDetail } from "../../../interface/Interfaces";

type Props = {
  data: IEventDetail[];
};

const Graph = (props: Props) => {
  return (
    <BarChart width={800} height={500} data={props.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="seatsRemain" fill="#f33e55" />
    </BarChart>
  );
};

export default Graph;
