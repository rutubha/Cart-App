import React from 'react'

export default function Footer(props) {
  return (
    <div className='row container m-4 align-center'>
        <button className="btn btn-danger col-2"  onClick={() => props.reset()}>Reset</button>
        <div className='col-5 d-flex justify-content-center'>
            <span className="badge bg-secondary text-center pt-2" style={{"fontSize": "18px"}} >
            ₹ {props.totalAmount}
            </span>
        </div>
        <button className="btn btn-primary col-2">Pay Now</button>
    </div>
  )
}
