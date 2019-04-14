import DownloadButton from "../DownloadButton";
import { StoreState } from "../../types";
import { connect } from "react-redux";

const mapStateToProps = ({ filteredList }: StoreState) => ({
  filteredList
});

const DownloadButtonContainer = connect(
  mapStateToProps,
  null
)(DownloadButton);

export default DownloadButtonContainer;
