import * as React from "react";
import { observer } from "mobx-react";
import { Route, Switch, withRouter } from "react-router-dom";
import NotFound from "../containers/not-found";
import { routes } from "./routes";
import { PrivateRoute } from "./private-routes";
import Home from "../containers/home";

// @ts-ignore
@withRouter
@observer
export default class Routes extends React.Component {
  render() {
    // eslint-disable-next-line no-undef
    const publicUrl = process.env.PUBLIC_URL;        

    return (
      <>
        <Switch>
          <PrivateRoute exact={true} path={`${publicUrl}/`} component={Home} />
          <PrivateRoute path={`${publicUrl}/home`} component={Home} />
          {routes.map((route, i) => (
            <PrivateRoute component={route.component} key={i} {...route} />
          ))}
          <Route render={props => <NotFound {...props} />} />
        </Switch>
      </>
    );
  }
}