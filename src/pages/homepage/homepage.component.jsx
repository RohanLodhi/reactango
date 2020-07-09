import React from "react";
import "./homepage.styles.css";
import ChallengeView from "./../../components/challenge-view/challenge-view.component";
import Details from "./../../components/details/details.component";

const HomePage = () => {
  return (
    <div>
      <Details />
      <ChallengeView />
    </div>
  );
};

export default HomePage;
