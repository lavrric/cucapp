import React from "react";
import Play from "../../components/play/play";
import { withRouter, useParams } from "react-router-dom";

function GamePage() {
  let { id } = useParams();
  return (
    <div>
      <Play id={id} />
    </div>
  );
}

export default withRouter(GamePage);
