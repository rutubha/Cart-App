import React from 'react'

export default function TotalItem(props) {
  return (
    <div>
        <span className="badge bg-dark" style={{'fontSize': '18px'}}>Total {props.productList.length}</span>
    </div>
  )
}
