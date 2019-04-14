import * as React from "react";
import { BarGraph } from "../types";

interface BarGraphProps {
  barGraph: BarGraph[];
}
const BarGraph = ({ barGraph }: BarGraphProps) => {
  var bars = barGraph.map((item: BarGraph, index: number) => {
    var height = { height: `${item.height}%` };
    return (
      <div className="bar-chart-area" key={index}>
        <div className="bar-chart-title">{item.title}</div>
        <div
          className={`bar-chart animation-delay-${index} grow`}
          id={`bar-${index}`}
          style={height}
        />
        <div className={`bar-count animation-delay-${index} appear`}>
          {item.count}
        </div>
      </div>
    );
  });
  return <div className="bar-chart-container">{bars}</div>;
};

export default BarGraph;
