import React from 'react'

export default function Product(props) {

  return (
    <div className='row mt-3'>
        <div className="col-5">
            <h2>{props.product.name} <span className="badge bg-secondary">₹ {props.product.price}</span></h2>
        </div>
        <div className="col-3">
            <div className="btn-group" role="group" aria-label='Basic mixed styles example'>
                <button type='button' className="btn btn-danger" onClick={()=>{props.decreamentQuantity(props.index);}}>-</button>
                <button type='button' className="btn btn-warning">{props.product.quantity}</button>
                <button type='button' className="btn btn-success" onClick={()=>{props.increamentQuantity(props.index);}}>+</button>
            </div>
        </div>
        <div className="col-2">
            <span className="badge bg-secondary p-2" style={{"fontSize": "18px",}}>
                ₹ {props.product.price*props.product.quantity}
            </span>
        </div>
        <div className="col-2">
            <button className="btn btn-danger p-2" onClick={() => props.removeItem(props.index)}>Remove</button>
        </div>
    </div>
  )
}
