import * as React from "react";
import { Summary } from "../types";
import { CSSTransition } from 'react-transition-group';
import "../../public/css/style.css";
interface SummaryProps {
  summary: Summary;
  animate: boolean;
  fetchingSuccess: boolean;
}

const ScoreCard = ({ summary, animate, fetchingSuccess }: SummaryProps) => {
  const duration = 1000;
  return (
    <React.Fragment>
      <style jsx="true">
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
      { fetchingSuccess && (
      <React.Fragment>

        <div className="score-card">
          <div className="total-flag-container">
            <CSSTransition in={animate} timeout={duration} classNames="summary-count1">
              <div className="flag-count">
                {summary.totalFlag}
              </div>
            </CSSTransition>
            <div className="flag-count-sub">Total Flags</div>
          </div>
          <div className="count-details-container">
            <CSSTransition in={animate} timeout={duration} classNames="summary-count2">
              <div className="flag-count">
                {summary.active}
              </div>
            </CSSTransition>
            <div className="flag-count-sub">Active</div>
            <CSSTransition in={animate} timeout={duration} classNames="summary-count3">
              <div className="flag-count">
                {summary.inactive}
              </div>
            </CSSTransition>
            <div className="flag-count-sub">Inactive</div>
          </div>
        </div>
        <div className="pie-chart-container">
          <CSSTransition in={animate} timeout={duration} classNames="pie-animation">
            <div className="pie-chart" />
          </CSSTransition>
        </div>
      </React.Fragment>
      )}
      </div>
    </React.Fragment>
  );
};


export default ScoreCard;
