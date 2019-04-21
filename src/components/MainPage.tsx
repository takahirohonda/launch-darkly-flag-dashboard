import * as React from 'react';
import { StoreState } from '../types';
import Header from './Header';
import DashboardTitle from './DashboardTitle';
import TableTitle from './TableTitle';
import TableContainer from './containers/TableContainer';
import SummarySection from './SummarySection';
import ScoreCardContainer from './containers/ScoreCardContainer';
import BarGraphContainer from './containers/BarGraphContainer';

export interface MainPageProps {
  onLoadData?: () => void;
  initialState: StoreState;
}

class MainPage extends React.Component<MainPageProps> {
  constructor(props: MainPageProps) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoadData();
  }

  render() {

    if (this.props.initialState.initialData.isFetching) {
      return (
        <div className='preloader-background active'>
          <div className='lds-spinner'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      );
    } else {
        return (
        <React.Fragment>
          <Header />
          <DashboardTitle />
          <SummarySection>
            <ScoreCardContainer />
            <BarGraphContainer />
          </SummarySection>
          <TableTitle />
          <TableContainer />
        </React.Fragment>
      );
    }
  }
}

export default MainPage;
