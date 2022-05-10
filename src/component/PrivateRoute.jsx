import { Navigate, Outlet } from 'react-router-dom';
import { useAuthSatus } from '../hooks/useAuthSatus';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthSatus();
  console.log(loggedIn, checkingStatus);

  if (checkingStatus) {
    return <h3> Loading...</h3>;
  }

  //Outlet allows us to return child element
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;

  //children prop is also same as using Outlet
  //return loggedIn ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
