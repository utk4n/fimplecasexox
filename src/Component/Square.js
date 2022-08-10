import React from 'react'

const Square = ({value, selectSquare, player}) => {
  return (
    <div className={`column ${player == "X" ? "xColumn" : "oColumn"}`} onClick={selectSquare}>{value}</div>
  )
}

export default Square