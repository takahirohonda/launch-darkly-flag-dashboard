import * as React from "react";
import UserSelectionContainer from "./containers/UserSelectionContainer";

const DashboardTitle = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="header-title">Flag Dashboard</h1>
        </div>
        <div className="col-lg-3 offset-lg-3">
          <UserSelectionContainer />
        </div>
      </div>
    </div>
  );
};

export default DashboardTitle;
