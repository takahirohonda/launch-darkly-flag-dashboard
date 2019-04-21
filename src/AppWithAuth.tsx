import * as React from 'react';
import { Authenticator, SignIn } from 'aws-amplify-react';
import config from '../config/aws-exports';
import App from './App';

class AppWithAuth extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Authenticator hideDefault={true} amplifyConfig={config}>
          <SignIn />
          <App />
        </Authenticator>
      </React.Fragment>
    );
  }
}

export default AppWithAuth;
