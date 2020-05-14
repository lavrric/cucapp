import React from 'react'
import Play from '../../components/play/play'
import { withRouter, useParams } from 'react-router-dom'

function GamePage({ pachete }) {
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <Play />
    </div>
  )
}

export default withRouter(GamePage);