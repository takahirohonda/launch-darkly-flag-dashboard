import UserSelection from "../UserSelection";
import { StoreState } from "../../types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../../actions";

const mapStateToProps = ({ userList }: StoreState) => ({
  userList
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onChangeSelection: (user: string) => {
    dispatch(actions.filteredUserList(user));
  },
  setAnimationProp: (bool: boolean) => {
    dispatch(actions.toggleAnimation(bool));
  }
});

const UserSelectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSelection);

export default UserSelectionContainer;
