import Table from "../Table";
import { StoreState } from "../../types";
import { connect } from "react-redux";

const mapStateToProps = ({ filteredList }: StoreState) => ({
  filteredList
});

const TableContainer = connect(
  mapStateToProps,
  null
)(Table);

export default TableContainer;
