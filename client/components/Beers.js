import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchBeers, queryBeers } from "../store/beers";

const Beers = ({ beers, match, history, onSearchBeers, onQueryBeers }) => {
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onFilterChange = (e) => {
    const val = e.target.value;
    setFilter(val);
    onSearchBeers({ type: val });
  };
  const onChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    onQueryBeers(val);
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
          <Link to="/beer">Beers</Link>
        </span>
      </div>
      <div style={{ marginBottom: "60px" }}>
        <h1 className="H1Background">BEER</h1>

        <section class="containercontainer">
          <p style={{ marginLeft: "-100px" }}>Filter by Type</p>
          <div class="dropdowndropdown">
            <select
              name="filter"
              className="dropdown-select"
              value={filter}
              onChange={onFilterChange}
            >
              <option value=""> All</option>
              <option value="Ale"> Ale</option>
              <option value="Lager">Lager</option>
            </select>
          </div>
          <p style={{ marginLeft: "-100px" }}>Sort by</p>

          <div className="dropdowndropdown">
            <select
              name="one"
              className="dropdown-select"
              value={match.params.sort}
              onChange={(ev) => history.push(`/beer?sort=${ev.target.value}`)}
            >
              <option value="name,asc"> A-Z</option>
              <option value="name,desc">Z-A</option>
              <option value="price,asc">Price low to high</option>
              <option value="price,desc">Price high to low</option>
            </select>
          </div>
          <p style={{ marginLeft: "-100px" }}>Search</p>
          <div>
            <input placeholder="search field" type='text' value={ query } onChange = { onChange } name='query' /> 
          </div>
        </section>
      </div>
      <section className="author-archive">
        <div className="container">
          <ol className="posts">
            {beers.map((beer) => (
              <div key={beer.id}>
                <Link to={`/beers/${beer.id}`}>
                  <div className="container">
                    <div className="card-2 card-div">
                      <div className="sekiro-img-div img-div">
                        <img src={`./images/${beer.imgURL}`} alt="" />
                      </div>
                      <div className="text-container">
                        <h2 className="item-name">
                          <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
                        </h2>
                        <p className="date1">{beer.type} </p>
                        <div className="pricing-and-cart1">
                          <div className="pricing1">
                            <p className="current-price1">${beer.price}</p>
                          </div>
                          <i className="fas fa-shopping-cart1" />
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
  const { beers } = state;
  const searchParams = new URLSearchParams(location.search); // ?sort=name,asc
  const sort = searchParams.get("sort");

  if (sort === "name,asc") {
    console.log("sort by name asc");
    beers.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "name,desc") {
    beers.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort === "price,asc") {
    beers.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sort === "price,desc") {
    beers.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  }
  return {
    beers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchBeers: (params) => {
      dispatch(searchBeers(params));
    },
    onQueryBeers: (query)=>{
      dispatch(queryBeers(query));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Beers);
