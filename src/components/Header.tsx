import * as React from 'react';
import { Auth } from 'aws-amplify';

const Header = () => {
  return (
    <div className='dashbord-header'>
      <div className='dashboard-header'>
        <div className='header-row'>
          <a
            href='https://app.launchdarkly.com/default/production/features'
            target='_blank'
          >
            <img
              src='img/launchdarkly-dark-bg.png'
              alt='LaunchDarkly Logo'
              className='header-img'
            />
          </a>
          <button
            type='button'
            className='btn btn-default'
            onClick={() => clickHandler()}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

const clickHandler = () => {
  Auth.signOut({ global: true })
    .then(data => {console.log(data); localStorage.clar();})
    .catch(err => {console.error(err); localStorage.clar();});
};

export default Header;
