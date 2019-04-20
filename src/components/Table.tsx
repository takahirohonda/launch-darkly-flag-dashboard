import * as React from "react";
import { StoreState, FeatureFlagData } from "../types";

interface TableProps {
  filteredList: StoreState["filteredList"];
}

const Table = ({ filteredList }: TableProps) => {
  const tableBody = filteredList.map((item: FeatureFlagData, index: number) => {
    let pretty;
    try {
      pretty = JSON.stringify(JSON.parse(item.customProperties), null, 2);
      if (pretty == "{}") {
        pretty = "";
      }
    } catch (err) {
      pretty = item.customProperties;
    }
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{item.flagName}</td>
        <td>{item.flagType}</td>
        <td>{item.on ? "Active" : "Inactive"}</td>
        <td>{item.archived ? "Yes" : "No"}</td>
        <td>{item.createdBy}</td>
        <td>{item.createdDate}</td>
        <td>{item.lastModified}</td>
        <td>{item.tags}</td>
        <td>{pretty}</td>
      </tr>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table table-bordered table-hover table-dark">
            <thead>
              <tr>
                <th />
                <th scope="col">Flag Name</th>
                <th scope="col">Type</th>
                <th scope="col">On?</th>
                <th scope="col">Archived?</th>
                <th scope="col">Created By</th>
                <th scope="col">Created</th>
                <th scope="col">Last Modified</th>
                <th scope="col">Tags</th>
                <th scope="col">Custom Properties</th>
              </tr>
            </thead>
            <tbody>{tableBody}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
