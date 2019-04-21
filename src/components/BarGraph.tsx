import * as React from 'react';
import { BarGraph as BarGraphTypes } from '../types';
import { CSSTransition } from 'react-transition-group';

interface BarGraphProps {
  barGraph: BarGraphTypes[];
  animate: boolean;
}

const BarGraph = ({ barGraph, animate }: BarGraphProps) => {
  const duration = 1600;
  const bars = barGraph.map((item: BarGraphTypes, index: number) => {
    const height = { height: `${item.height}%` };
    return (
      <div className='bar-chart-area' key={index}>
        <div className='bar-chart-title'>{item.title}</div>
        <CSSTransition in={animate} timeout={duration} classNames={`bar-grow${index}`}>
        <div
          className={`bar-chart`}
          id={`bar-${index}`}
          style={height}
        />
        </CSSTransition>
        <CSSTransition in={animate} timeout={duration} classNames={`count-appear${index}`}>
          <div className={`bar-count`}>
            {item.count}
          </div>
        </CSSTransition>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className='bar-chart-container'>{bars}</div>
    </React.Fragment>
  );
};

export default BarGraph;
