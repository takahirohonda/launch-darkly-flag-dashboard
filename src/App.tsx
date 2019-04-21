import * as React from 'react';
import MainPageContainer from './components/containers/MainPageContainer';

interface AppProps {
  authState?: any;
}

class App extends React.Component<AppProps> {
  constructor(props: AppProps, context: any) {
    super(props, context);
  }

  render() {
    if (this.props.authState == 'signedIn') {
      return (
        <React.Fragment>
          <MainPageContainer />
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default App;
