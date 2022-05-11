import { Navigate, Outlet } from 'react-router-dom';
import { useAuthSatus } from '../hooks/useAuthSatus';
import Spinner from './Spinner';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthSatus();

  if (checkingStatus) {
    return (
      <h3>
        <Spinner />
      </h3>
    );
  }

  //Outlet allows us to return child element
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;

  //children prop is also same as using Outlet
  //return loggedIn ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
