import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routesList } from './routes.list';

function Routes() {
  return (
    <Switch>
      {routesList.map((route: IRoute) => {
        return (
          <Route
            key={route.id}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        );
      })}
    </Switch>
  );
}

interface IRoute {
  id: string,
  name?: string;
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

export default Routes;
