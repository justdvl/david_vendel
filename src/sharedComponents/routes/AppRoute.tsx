import * as React from "react";
import { Redirect, RouteProps, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
// import { useMst } from "../../store/Root";
// import { Layout } from "../../layout";

export const AppRoute: React.FC<RouteProps> = observer((props: RouteProps) => {
//   const { user } = useMst();
  const { component, ...rest } = props;
//   if (!user.isAuthenticated) {
//     return <Redirect to={"/login"} />;
//   }

  const Component = component as any;

  return (
    <Route
      {...rest}
      render={(props) => (
        // <Layout>
          <Component {...props} />
        // </Layout>
      )}
    />
  );
});
