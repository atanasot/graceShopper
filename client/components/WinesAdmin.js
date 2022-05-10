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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <span style={{ marginLeft: "50px" }}>ADD A WINE</span>
        <form onSubmit={this.onSubmit} style={{ marginLeft: "50px" }}>
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
            <label className="label11">Wine Name</label>
          </div>
          <div className="group">
            <input
              type="text"
              name="year"
              value={this.state.year}
              onChange={this.onChange}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label11">Wine Year</label>
          </div>
          <div className="group">
            <input
              type="text"
              name="region"
              value={this.state.region}
              onChange={this.onChange}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label11">Wine Region</label>
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
            <label className="label11">Wine Type</label>
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
            <label className="label11">Wine Style</label>
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
            <label className="label11">Wine ABV</label>
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
            <label className="label11">Wine Price</label>
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
            <label className="label11">Wine Inventory Count</label>
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
            <label className="label11">Wine description</label>
          </div>

          <button
            className="register-btn"
            style={{ width: "100px", height: "50px", marginLeft: "50px" }}
          >
            Add Wine
          </button>
        </form>
      </div>
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
