import React from "react";
import "./homepage.styles.css";
import ChallengeView from "./../../components/challenge-view/challenge-view.component";
import Details from "./../../components/details/details.component";

const HomePage = (props) => {
  React.useEffect(() => {
    const qs = window.location.search;
    let c = new URLSearchParams(qs);
    if (c.get("__loader")) {
      const route = c.get("__loader");
      props.history.push(route);
      return;
    }
  }, []);
  return (
    <div>
      <Details />
      <ChallengeView />
    </div>
  );
};

export default HomePage;
