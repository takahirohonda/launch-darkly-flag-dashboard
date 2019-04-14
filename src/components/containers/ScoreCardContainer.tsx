import ScoreCard from "../ScoreCard";
import { StoreState } from "../../types";
import { connect } from "react-redux";

const mapStateToProps = ({ summary }: StoreState) => ({
  summary
});

const ScoreCardContainer = connect(
  mapStateToProps,
  null
)(ScoreCard);

export default ScoreCardContainer;
