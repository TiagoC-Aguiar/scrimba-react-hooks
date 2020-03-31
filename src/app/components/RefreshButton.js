import React from 'react'

function RefreshButton({ cb }) {
  return <button className="button-refresh-colors" onClick={cb}>&#8634;</button>
}

export default RefreshButton
