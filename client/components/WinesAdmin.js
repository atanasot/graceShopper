import React, { Component } from "react";
import { connect } from "react-redux";
import { store, fetchWines, adminAddWine } from "../store/wines";

class WinesAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      year: "",
      region: "",
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

  onChange(ev) {
    this.setState({
      ...this.state,
      [ev.target.name]: ev.target.value,
    });
    console.log(this.state);
  }

  async onSubmit(ev) {
    ev.preventDefault();
    const wine = this.state;
    await this.props.addWine(wine);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
          placeholder="Wine Name"
        />
        <input
          type="text"
          name="year"
          value={this.state.year}
          onChange={this.onChange}
          placeholder="Wine Year"
        />
        <input
          type="text"
          name="region"
          value={this.state.region}
          onChange={this.onChange}
          placeholder="Wine Region"
        />
        <input
          type="text"
          name="type"
          value={this.state.type}
          onChange={this.onChange}
          placeholder="Wine Type"
        />
        <input
          type="text"
          name="style"
          value={this.state.style}
          onChange={this.onChange}
          placeholder="Wine Style"
        />
        <input
          type="text"
          name="abv"
          value={this.state.abv}
          onChange={this.onChange}
          placeholder="Wine ABV"
        />
        <input
          type="text"
          name="price"
          value={this.state.price}
          onChange={this.onChange}
          placeholder="Wine Price"
        />
        <input
          type="text"
          name="inventoryCount"
          value={this.state.inventoryCount}
          onChange={this.onChange}
          placeholder="Wine Inventory Count"
        />
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.onChange}
          placeholder="Description"
        />
        <button>Add Wine</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { wines, auth } = state;
  return {
    auth,
    wines,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWines: () => dispatch(fetchWines()),
    addWine: (wine) => dispatch(adminAddWine(wine)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WinesAdmin);
