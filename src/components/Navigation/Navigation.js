import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {

      if(isSignedIn) {
        return (
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='f3 link dim black pa3 pointer b--solid br4'>Sign Out</p>
          </nav>
        );
      } else {
        return (
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black  pa3 pointer b--solid br4'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f3 link dim black  pa3 pointer b--solid br4'>Register</p>
          </nav>
        );
      }
      
    
}

export default Navigation;