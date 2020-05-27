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
        text="Joacă pachete de Ce? Unde? Când? din arhiva Clubului Moldovenesc de Jocuri Intelectuale. La moment sunt disponibile circa 3000 de întrebări și în fiecare zi adăugăm pachete noi."
        a="/select"
      />
      <Feature
        title="Joacă Random"
        text="Joacă 10 întrebări alese la întâmplare, dar cu cap, de sistem. Alegerea perfectă în cazul în care dorești să ai parte de un joc divers, cu întrebări noi, dar și vechi, de la autori diferiți, și în stiluri cât mai variate."
        a="/play/424242"
      />
      <Feature
        title="Caută Întrebări"
        text="Găsește întrebarea aia care îți stă de mult timp pe limbă, însă nu ți-o amintești. Caută întrebări după autor, întrebare, răspuns, sursă."
        a="/search"
      />
    </div>
  </div>
);

export default HomePage;
