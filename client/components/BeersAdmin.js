import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBeers, adminAddBeer } from "../store/beers";

class BeersAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      brand: "",
      state: "",
      country: "",
      type: "",
      style: "",
      abv: "",
      price: "",
      inventoryCount: "",
      description: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = (ev) => {
    this.setState({
      ...this.state,
      [ev.target.name]: ev.target.value,
    });
    console.log(this.state);
  };

  async onSubmit(ev) {
    ev.preventDefault();
    const beer = this.state;
    await this.props.addBeer(beer);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
          placeholder="Beer Name"
        />
        <input
          type="text"
          name="brand"
          value={this.state.brand}
          onChange={this.onChange}
          placeholder="Beer Brand"
        />
        <input
          type="text"
          name="state"
          value={this.state.state}
          onChange={this.onChange}
          placeholder="State"
        />
        <input
          type="text"
          name="country"
          value={this.state.country}
          onChange={this.onChange}
          placeholder="Country"
        />
        <input
          type="text"
          name="type"
          value={this.state.type}
          onChange={this.onChange}
          placeholder="Type"
        />
        <input
          type="text"
          name="style"
          value={this.state.style}
          onChange={this.onChange}
          placeholder="Beer Style"
        />
        <input
          type="text"
          name="abv"
          value={this.state.abv}
          onChange={this.onChange}
          placeholder="Beer ABV"
        />
        <input
          type="text"
          name="price"
          value={this.state.price}
          onChange={this.onChange}
          placeholder="Beer Price"
        />
        <input
          type="text"
          name="inventoryCount"
          value={this.state.inventoryCount}
          onChange={this.onChange}
          placeholder="Beer Inventory Count"
        />
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.onChange}
          placeholder="Description"
        />
        <button>Add Beer</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { beers, auth } = state;
  return {
    auth,
    beers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    addBeer: (beer) => dispatch(adminAddBeer(beer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeersAdmin);
