import * as React from "react";

interface IBodyContainerProps {
  children?: JSX.Element[] | JSX.Element;
}

const SummarySection = (props: IBodyContainerProps) => {
  return (
    <div className="container">
      <div className="summary-container">{props.children}</div>
    </div>
  );
};

export default SummarySection;
