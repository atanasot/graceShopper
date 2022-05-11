import React from "react";
import { connect } from "react-redux";
import { adminUpdateWine, fetchWines } from "../store/wines";

class ProductAdminUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wineId: "",
      name: this.props.wine.name ? this.props.wine.name : "",
      year: this.props.wine.year ? this.props.wine.year : "",
      type: this.props.wine.type ? this.props.wine.type : "",
      style: this.props.wine.style ? this.props.wine.style : "",
      abv: this.props.wine.abv ? this.props.wine.abv : "",
      price: this.props.wine.price ? this.props.wine.price : "",
      inventoryCount: this.props.wine.inventoryCount
        ? this.props.wine.inventoryCount
        : "",
      description: this.props.wine.description
        ? this.props.wine.description
        : "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchWines();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.wine.id && this.props.wine.id) {
      this.setState({
        wineId: this.props.wine.id,
        name: this.props.wine.name,
        year: this.props.year,
        type: this.props.type,
        style: this.props.style,
        abv: this.props.wine.abv,
        price: this.props.wine.price,
        inventoryCount: this.props.inventoryCount,
        description: this.props.description,
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
    const wine = {
      wineId: this.props.wine.id,
      name: this.state.name,
      year: this.state.year,
      type: this.state.type,
      style: this.state.style,
      abv: this.state.abv,
      price: this.state.price,
      inventoryCount: this.state.inventoryCount,
      description: this.state.description,
    };
    await this.props.updateWine(wine);
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmit}>
            <label>{this.props.wine.id}</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              placeholder="Update Name"
            />
            <input
              type="text"
              name="year"
              value={this.state.year}
              onChange={this.onChange}
              placeholder="Update Year"
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
          <img src={`/images/${this.props.wine.imgURL}`} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, history) => {
  const { wines, beers } = state;
  const wine =
    wines.find((wine) => wine.id === history.match.params.id * 1) || {};
  return {
    wine,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateWine: (wine) => dispatch(adminUpdateWine(wine)),
    fetchWines: () => dispatch(fetchWines),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdminUpdate);
