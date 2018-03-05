// Higher Order Component (HOC) - A component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>The info is { props.info }</h1>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share!</p> }
      <WrappedComponent { ...props } />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { !props.isAuthenticated && <p>Please login</p> }
      { props.isAuthenticated && <WrappedComponent { ...props } /> }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={ true } info="these are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={ true } info="these are the details" />, document.getElementById('app'));