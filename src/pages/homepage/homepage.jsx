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
        text="Joacă pachete de Ce? Unde? Când? din arhiva Clubului Moldovenesc de Jocuri Intelectuale. La moment nu este disponibil un număr mare de pachete, însă, în curând vom adăuga mai multe."
        a="/select"
      />
      <Feature
        title="Joacă Random"
        text="Joacă 10 întrebări alese la întâmplare, dar cu cap, de sistem. Alegerea perfectă în cazul în care dorești să ai parte de un joc divers, cu întrebări noi, dar și vechi, de la autori diferiți, și în stiluri cât mai variate."
        a="/play/424242"
      />
      <Feature
        title="Caută Întrebări"
        text="Mick-unealta secretă! Acestă mick-unealtă vă va permite să gasiți intrebarea aia care vă stă de atâta timp pe limbă, dar nu v-o puteți aminti. Perfect într-adevăr! Această opțiune este în curs de dezvoltare. "
        a="/"
      />
    </div>
  </div>
);

export default HomePage;
