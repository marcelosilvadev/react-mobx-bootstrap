import { Route } from "react-router-dom";
import MainMenu from "../components/main-menu";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <>
        <MainMenu />        
        <Component {...props} />
      </>
    )}
  />
);