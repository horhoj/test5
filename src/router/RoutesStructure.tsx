import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HOME_PAGE } from '../config/app';
import { routes } from './routes';
import { RouteItem } from './types';
import { getPathByName } from './helpers';
import { RedirectExecutor } from './RedirectExecutor';

export const RoutesStructure: React.FC = () => {
  const getRouteAction = (route: RouteItem) => <route.component />;

  return (
    <>
      <RedirectExecutor />
      <Switch>
        <Redirect from={'/'} to={getPathByName(HOME_PAGE)} exact={true} />;
        {routes.map((route) => (
          <Route path={route.path} exact={route.exact} key={route.name}>
            {getRouteAction(route)}
          </Route>
        ))}
      </Switch>
    </>
  );
};
