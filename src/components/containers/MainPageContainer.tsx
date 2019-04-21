import MainPage from '../MainPage';
import { StoreState, FeatureFlagData } from '../../types';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (initialState: StoreState) => ({
  initialState
});

const mapDispatchToProps = (dispatch: any) => ({
  onLoadData: () => {
    dispatch(actions.loadInitialData());
  }
});

const MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

export default MainPageContainer;
