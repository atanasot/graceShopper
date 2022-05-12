import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchWines } from "../store/wines";

const Wines = ({ wines, match, history, onSearchWines }) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onFilterChange = (e) => {
    const val = e.target.value;
    setFilter(val);
    onSearchWines({ type: val });
  };

  return (
    <div>
      <div style={{ marginLeft: "270px", marginTop: "100px" }}>
        <span
          style={{
            textDecoration: "underline",
          }}
        >
          <Link to="/">Home</Link>
        </span>{" "}
        /{" "}
        <span
          style={{
            textDecoration: "underline",
          }}
        >
          <Link to="/wine">Wines</Link>
        </span>
      </div>
      <div style={{ marginBottom: "60px" }}>
        <h1 className="H1Background">Wine</h1>
      </div>
      <section className="author-archive">
        <div className="sidebar">
          <div className="subheader">Filter by Style</div>
          <div class="dropdowndropdown">
            <select
              name="filter"
              class="dropdown-select"
              value={filter}
              onChange={onFilterChange}
            >
              <option value="">All</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Rose">Rose</option>
              <option value="Champagne">Champagne</option>
            </select>
          </div>
          <div className="subheader">Sort by</div>
          <div class="dropdowndropdown">
            <select
              name="one"
              class="dropdown-select"
              value={match.params.sort}
              onChange={(ev) => history.push(`/wine?sort=${ev.target.value}`)}
            >
              <option value="name,asc"> Name A-Z</option>
              <option value="name,desc">Name Z-A</option>
              <option value="price,asc">Price low to high</option>
              <option value="price,desc">Price high to low</option>
            </select>
          </div>
        </div>
        <div className="container">
          <ol className="posts">
            {wines.map((wine) => (
              <div key={wine.id}>
                <Link to={`/wines/${wine.id}`}>
                  <div className="container">
                    <div className="card-1 card-div">
                      <div className="gow-img-div img-div">
                        <img src={`./images/${wine.imgURL}`} alt="" />
                      </div>
                      <div className="text-container">
                        <h2 className="item-name">
                          {" "}
                          <Link to={`/wines/${wine.id}`}>{wine.name}</Link>
                        </h2>
                        <p className="date">{wine.type} </p>
                        <div className="pricing-and-cart">
                          <div className="pricing">
                            <p className="current-price">${wine.price}</p>
                          </div>
                          <i className="fas fa-shopping-cart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state, { location, match }) => {
  const { wines } = state;
  const searchParams = new URLSearchParams(location.search); // ?sort=name,asc
  const sort = searchParams.get("sort");

  if (sort === "name,asc") {
    console.log("sort by name asc");
    wines.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "name,desc") {
    wines.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort === "price,asc") {
    wines.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sort === "price,desc") {
    wines.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }
  return {
    wines,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchWines: (params) => {
      dispatch(searchWines(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wines);
