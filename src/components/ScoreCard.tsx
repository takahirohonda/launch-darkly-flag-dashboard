import * as React from "react";
import { Summary } from "../types";
import { CSSTransition } from "react-transition-group";

interface SummaryProps {
  summary: Summary;
}

const ScoreCard = ({ summary }: SummaryProps) => {
  return (
    <React.Fragment>
      <style>
        {`.pie-chart::before {
        content: "";
        display: block;
        margin-left: 50%;
        height: 100%;
        border-radius: 0 100% 100% 0 / 50%;
        background-color: inherit;
        transform-origin: left;
        transform: rotate(${summary.activePercentage}deg);
      }`}
      </style>

      <div className="score-card-container">
        <div className="score-card">
          <div className="total-flag-container">
            <div className="flag-count animation-delay-1 appear">
              {summary.totalFlag}
            </div>
            <div className="flag-count-sub">Total Flags</div>
          </div>
          <div className="count-details-container">
            <div className="flag-count animation-delay-3 appear">
              {summary.active}
            </div>
            <div className="flag-count-sub">Active</div>
            <div className="flag-count animation-delay-5 appear">
              {summary.inactive}
            </div>
            <div className="flag-count-sub">Inactive</div>
          </div>
        </div>
        <div className="pie-chart-container">
          <div className="pie-chart animation-delay-6 appear" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScoreCard;
