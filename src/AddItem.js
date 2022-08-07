import React, { Component } from "react";

export class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
        productName: "",
        productPrice: 0
    };
  }

  render() {
    return (
      <>
        <form className="mt-4 mb-5 row" onSubmit={(e) => {
            e.preventDefault();
            this.props.addItem(this.state.productName, Number(this.state.productPrice));
          }}>
          <div className="form-group col-5">
            <label htmlFor="inputName">Enter Name: </label>
            <input
              type="text"
              className="form-control"
              id="inputeName"
              aria-describedby="name"
              name="productName"
              onChange={(e) => {
                this.setState({productName: e.currentTarget.value});
              }}
              value={this.state.productName}
            />
          </div>
          <div className="form-group col-5">
            <label htmlFor="inputPrice">Price: </label>
            <input
              type="number"
              className="form-control"
              id="inputPrice"
              name="productPrice"
              onChange={(e) => {
                this.setState({productPrice: Number(e.currentTarget.value)});
              }}
              value={this.state.productPrice}
            />
          </div>
          <div className="d-flex justify-content-center col-2 p-1 mt-3">
           <button type="submit" className="btn btn-primary">
              Add Item
            </button>
          </div>
        </form>
      </>
    );
  }
}
