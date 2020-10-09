import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';

export default function ProtectedRoute(props) {
  const {login, data } = React.useContext(UserContext);

  if (login) return <Route {...props} />;
  else if (login === false) return <Navigate to='/login' />;
  else return null;
}
