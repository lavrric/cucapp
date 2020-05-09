import React from "react";
import "./homepage.scss";

import Description from "../../components/description/description";
import Feature from "../../components/feature/feature";

const HomePage = () => (
  <div className="homepage">
    <Description />
    <div className="feature-list">
      <Feature />
      <Feature />
      <Feature />
    </div>
  </div>
);

export default HomePage;
