import React from "react";
import "./homepage.scss";

import Description from "../../components/description/description.component";
import Feature from "../../components/feature/feature.component";

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
