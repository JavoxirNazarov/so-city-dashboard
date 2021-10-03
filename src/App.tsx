import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { RootState } from "./redux";
import { setIsSignedIn } from "./redux/slices/auth-slice";
import Auth from "./screens/Auth";
import NewPartner from "./screens/NewPartner";
import Partner from "./screens/Partner";
// import { refreshToken } from "./utils/api/refreshToken";
import Partners from "./screens/Partners";
import Service from "./screens/Service";
import Services from "./screens/Services";

function App() {
  const dispatch = useDispatch();
  const { isSignedIn } = useSelector((state: RootState) => state.authState);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("ACCES_TOKEN");

    if (token) {
      dispatch(setIsSignedIn(true));
    }
    setInitializing(false);

    // refreshToken(
    //   () => {
    //     dispatch(setIsSignedIn(true));
    //     setInitializing(false);
    //   },
    //   () => {
    //     setInitializing(false);
    //   },
    // );
  }, [dispatch]);

  if (initializing) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }

  if (!isSignedIn) {
    return <Auth />;
  }

  return (
    <Switch>
      <Route component={Partners} path="/" exact />
      <Route component={Partner} path="/partner/:ID" />
      <Route component={NewPartner} path="/new-partner" />
      <Route component={Services} path="/services/:partnerID" exact />
      <Route component={Service} path="/services/:partnerID/:serviceID" />
    </Switch>
  );
}

export default App;
