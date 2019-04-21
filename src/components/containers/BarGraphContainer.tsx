import BarGraphComponent from '../BarGraph';
import { StoreState } from '../../types';
import { connect } from 'react-redux';

const mapStateToProps = ({ barGraph, animate }: StoreState) => ({
  barGraph,
  animate
});

const BarGraphContainer = connect(
  mapStateToProps,
  null
)(BarGraphComponent);

export default BarGraphContainer;
