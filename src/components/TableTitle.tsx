import * as React from "react";
import DownloadButtonContainer from "./containers/DownloadButtonContainer";
const TableTitle = () => {
  return (
    <div className="container flag-list-header">
      <div className="row">
        <div className="col-sm-6">
          <h1 className="header-title">Flag List</h1>
        </div>
        <div className="col-lg-2 offset-lg-4 col-md-3 offset-md-3 col-sm-6">
          <DownloadButtonContainer />
        </div>
      </div>
    </div>
  );
};

export default TableTitle;
