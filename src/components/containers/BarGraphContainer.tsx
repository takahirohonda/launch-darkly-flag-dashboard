import BarGraph from "../BarGraph";
import { StoreState } from "../../types";
import { connect } from "react-redux";

const mapStateToProps = ({ barGraph }: StoreState) => ({
  barGraph
});

const BarGraphContainer = connect(
  mapStateToProps,
  null
)(BarGraph);

export default BarGraphContainer;
