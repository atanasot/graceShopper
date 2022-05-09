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
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <span style={{ marginLeft: "50px" }}>ADD A BEER</span>
        <form onSubmit={this.onSubmit}>
          <div className="group">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label11">Beer Name</label>
          </div>
          <div className="group">
            <input
              type="text"
              name="brand"
              value={this.state.brand}
              onChange={this.onChange}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label11">Beer Brand</label>
          </div>
          <div className="group">
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.onChange}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label11">Beer State</label>
          </div>
          <div className="group">
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.onChange}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label11">Beer Country</label>
          </div>
          <div className="group">
            <input
              type="text"
              name="type"
              value={this.state.type}
              onChange={this.onChange}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label11">Beer Type</label>
          </div>
          <div className="group">
            <input
              type="text"
              name="style"
              value={this.state.style}
              onChange={this.onChange}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label11">Beer Style</label>
          </div>
          <div className="group">
            <input
              type="text"
              name="abv"
              value={this.state.abv}
              onChange={this.onChange}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label11">Beer ABV</label>
          </div>
          <div className="group">
            <input
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.onChange}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label11">Beer Price</label>
          </div>
          <div className="group">
            <input
              type="text"
              name="inventoryCount"
              value={this.state.inventoryCount}
              onChange={this.onChange}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label11">Beer Inventory Count</label>
          </div>
          <div className="group">
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label11">Beer Description</label>
          </div>
          <button
            className="register-btn"
            style={{ width: "100px", height: "50px", marginLeft: "50px" }}
          >
            Add Wine
          </button>{" "}
        </form>
      </div>
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
