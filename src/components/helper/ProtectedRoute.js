import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';

export default function ProtectedRoute(props) {
  const { login, data } = React.useContext(UserContext);
  console.log(login, data);
  if (login) return <Route {...props} />;
  else if (!login) return <Navigate to='/login' />;
  else return null;
}
