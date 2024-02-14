import { Route, Switch } from "react-router-dom";
import NotFoundPage from "../common/pages/NotFoundPage";
import CoinDetails from "../features/coingeckoAPI/CoinDetails";
import CoinsList from "../features/coingeckoAPI/CoinList";

const routes = [
  {
    path: "/coins",
    component: CoinsList,
    exact: true,
  },
  {
    path: "/coins/:id",
    component: CoinDetails,
  },
  {
    path: "*",
    component: (props) => <NotFoundPage redirectTo={"/coins"} />,
  },
];

const RenderAllRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      render={(props) => {
        return <Component {...props} />;
      }}
      {...rest}
    />
  );
};

export const RenderRoutes = () => (
  <Switch>
    {routes.map((route, i) => (
      <RenderAllRoutes key={i} {...route} />
    ))}
  </Switch>
);
