import React from "react";
import { connect } from "react-redux";
import { adminUpdateBeer, fetchBeers } from "../store/beers";
import { Link } from "react-router-dom";
import { withAlert } from "react-alert";

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
    const { alert } = this.props;

    return (
      <div className="background11111">
        <div
          style={{
            marginTop: "40px",
            marginLeft: "-90px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              textDecoration: "underline",
            }}
          >
            <Link to="/adminproduct">Go Back</Link>
          </span>
          <h1 className="H1Background">Update</h1>
        </div>

        <div className="contact11111" id="contact">
          <div>
            <form className="contact11111" onSubmit={this.onSubmit}>
              <div>
                <span className="contactspan">Name:</span>
                <input
                  name="name"
                  type="text"
                  value={this.state.name}
                  id="name"
                  size={30}
                  onChange={this.onChange}
                  placeholder="Update Name"
                />
                <br />
                <span className="contactspan">Brand:</span>
                <input
                  name="brand"
                  type="text"
                  id="email"
                  size={30}
                  value={this.state.brand}
                  onChange={this.onChange}
                  placeholder="Update brand"
                />
                <br />
                <span className="contactspan">Country:</span>
                <input
                  name="country"
                  type="text"
                  id="email"
                  size={30}
                  value={this.state.country}
                  onChange={this.onChange}
                  placeholder="Update country"
                />
                <br />
                <span className="contactspan">State:</span>
                <input
                  name="state"
                  type="text"
                  id="email"
                  size={30}
                  value={this.state.state}
                  onChange={this.onChange}
                  placeholder="Update state"
                />
                <br />
                <span className="contactspan">Type:</span>
                <input
                  name="type"
                  type="text"
                  id="phone"
                  size={30}
                  value={this.state.type}
                  onChange={this.onChange}
                  placeholder="Update type"
                />
                <br />
                <span className="contactspan">Style:</span>
                <input
                  name="style"
                  type="text"
                  id="human"
                  size={30}
                  value={this.state.style}
                  onChange={this.onChange}
                  placeholder="Update Style"
                />
                <br />

                <span className="contactspan"> Price:</span>
                <input
                  name="price"
                  type="text"
                  id="human"
                  size={30}
                  value={this.state.price}
                  onChange={this.onChange}
                  placeholder="Update Price"
                />
                <br />
                <span className="contactspan">Inventory Count:</span>
                <input
                  name="inventoryCount"
                  type="text"
                  id="human"
                  size={30}
                  value={this.state.inventoryCount}
                  onChange={this.onChange}
                  placeholder="Update Inventory Count"
                />
                <br />
              </div>
              <div className="col-md-5">
                <textarea
                  name="description"
                  cols={40}
                  rows={15}
                  id="comments"
                  value={this.state.description}
                  onChange={this.onChange}
                  placeholder="Update description"
                />
              </div>
              <button
                className="product__btn"
                style={{ margin: "20px" }}
                onClick={() => {
                  alert.success("updated!");
                }}
              >
                Update
              </button>
            </form>
          </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAlert()(BeerAdminUpdate));
