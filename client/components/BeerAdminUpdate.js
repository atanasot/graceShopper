import React from "react";
import { connect } from "react-redux";
import { adminUpdateBeer, fetchBeers } from "../store/beers";

class BeerAdminUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beerId: "",
      name: this.props.beer.name ? this.props.beer.name : "",
      brand: this.props.beer.year ? this.props.beer.brand : "",
      state: this.props.beer.state ? this.props.beer.state : "",
      country: this.props.beer.country ? this.props.beer.country : "",
      type: this.props.beer.type ? this.props.beer.type : "",
      style: this.props.beer.style ? this.props.beer.style : "",
      abv: this.props.beer.abv ? this.props.beer.abv : "",
      price: this.props.beer.price ? this.props.beer.price : "",
      inventoryCount: this.props.beer.inventoryCount
        ? this.props.beer.inventoryCount
        : "",
      description: this.props.beer.description
        ? this.props.beer.description
        : "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBeers();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.beer.id && this.props.beer.id) {
      this.setState({
        beerId: this.props.beer.id,
        name: this.props.beer.name,
        brand: this.props.beer.brand,
        state: this.props.beer.state,
        country: this.props.beer.country,
        type: this.props.beer.type,
        style: this.props.beer.style,
        abv: this.props.beer.abv,
        price: this.props.beer.price,
        inventoryCount: this.props.beer.inventoryCount,
        description: this.props.beer.description,
      });
    }
  }
  onChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
  }

  async onSubmit(ev) {
    ev.preventDefault();
    const beer = {
      beerId: this.props.beer.id,
      name: this.state.name,
      brand: this.state.brand,
      state: this.state.state,
      country: this.state.country,
      type: this.state.type,
      style: this.state.style,
      abv: this.state.abv,
      price: this.state.price,
      inventoryCount: this.state.inventoryCount,
      description: this.state.description,
    };
    await this.props.updateBeer(beer);
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmit}>
            <label>{this.props.beer.id}</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              placeholder="Update Name"
            />
            <input
              type="text"
              name="brand"
              value={this.state.brand}
              onChange={this.onChange}
              placeholder="Update Brand"
            />
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.onChange}
              placeholder="Update State"
            />
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.onChange}
              placeholder="Update Country"
            />
            <input
              type="text"
              name="type"
              value={this.state.type}
              onChange={this.onChange}
              placeholder="Update Type"
            />
            <input
              type="text"
              name="style"
              value={this.state.style}
              onChange={this.onChange}
              placeholder="Update Style"
            />
            <input
              type="text"
              name="abv"
              value={this.state.abv}
              onChange={this.onChange}
              placeholder="Update A.B.V"
            />
            <input
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.onChange}
              placeholder="Update Price"
            />
            <input
              type="text"
              name="inventoryCount"
              value={this.state.inventoryCount}
              onChange={this.onChange}
              placeholder="Update Inventory Count"
            />
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              placeholder="Update Description"
            />
            <button>Update Product</button>
          </form>
        </div>
        <div>
          <img src={`/images/${this.props.beer.imgURL}`} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, history) => {
  const { beers } = state;
  const beer =
    beers.find((_beer) => _beer.id === history.match.params.id * 1) || {};
  return {
    beer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBeer: (beer) => dispatch(adminUpdateBeer(beer)),
    fetchBeers: () => dispatch(fetchBeers),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerAdminUpdate);
