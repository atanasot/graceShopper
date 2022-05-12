import React from "react";
import { connect } from "react-redux";
import { adminUpdateWine, fetchWines } from "../store/wines";
import { Link } from "react-router-dom";

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
                  <span className="contactspan">Year:</span>
                  <input
                    name="year"
                    type="text"
                    id="email"
                    size={30}
                    value={this.state.year}
                    onChange={this.onChange}
                    placeholder="Update Year"
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
                  <span className="contactspan">A.B.V:</span>
                  <input
                    name="abv"
                    type="text"
                    id="human"
                    size={30}
                    value={this.state.abv}
                    onChange={this.onChange}
                    placeholder="Update A.B.V"
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
                <button className="product__btn" style={{ margin: "20px" }}>
                  Update
                </button>
              </form>
            </div>
          </div>
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
