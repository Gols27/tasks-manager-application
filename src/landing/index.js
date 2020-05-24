import React, { useEffect } from "react";
import AppLoader from "../common/appLoader";
import { useHistory } from "react-router-dom";

const Landing = props => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/login");
    }, 2000);
  }, [history]);

  return <AppLoader />;
};

export default Landing;
