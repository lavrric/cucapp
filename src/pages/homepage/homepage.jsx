import React from "react";
import "./homepage.scss";

import Description from "../../components/description/description";
import Feature from "../../components/feature/feature";

const HomePage = () => (
  <div className="homepage">
    <Description />
    <div className="feature-list">
      <Feature
        title="Joacă Pachete"
        text="Joacă pachete Ce Unde Când din arhiva Clubului de Jocuri Intelectuale din Moldova. La moment nu sunt disponibile atât de multe pachete câte ne-am dori, dar pe parcurs vom adăuga cât mai multe (în ordine cronologică)."
      />
      <Feature
        title="Joacă Întrebări"
        text="Joacă întrebări alese random, dar cu cap de sistemul din spate. Alegerea perfectă în cazul în care dorești să ai parte de un joc divers cu întrebări noi, dar și vechi, de la autori diferiți, și în stiluri cât mai variate."
      />
      <Feature
        title="Caută Întrebări"
        text="Mick-unealta perfectă! Acestă mick-unealtă vă va permite să gasiți intrebarea aia care vă stă de atâta timp pe limba dar nu v-o puteți aminti. Perfect într-adevăr! Planificăm să adăugam acest feature cât de curând posibil. "
      />
    </div>
  </div>
);

export default HomePage;
