import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Wines = ({ wines, match, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <section className="author-archive">
        <div className="container">
          <div style={{ marginBottom: "70px" }}>
            <h1>WINE</h1>
            <div>
              <select value={ match.params.sort } onChange={ ev =>  history.push(`/wine?sort=${ev.target.value}`)}>
                <option value=''> Sort By</option>
                <option value='name,asc'> Name ASC</option>
                <option value='name,desc'> Name DESC</option>
                <option value='price,asc'> Price ASC</option>
                <option value='price,desc'> Price DESC</option>
              </select>
            </div>
          </div>
          <ol className="posts">
            {wines.map((wine) => (
              <div key={wine.id}>
                <Link to={`/wines/${wine.id}`}>
                  <div className="container">
                    <div className="card-1 card-div">
                      <div className="like-icon-div">
                        <label
                          htmlFor="card-1-like"
                          className="like-icon-div-child"
                        >
                          <input type="checkbox" id="card-1-like" />
                          <i className="far fa-heart heart-empty" />
                          <i className="fas fa-heart heart-fill" />
                        </label>
                      </div>
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

const mapStateToProps = (state, {location, match}) => {
  const { wines } = state;
  const searchParams = new URLSearchParams(location.search) // ?sort=name,asc
  const sort = searchParams.get('sort');

  if (sort === 'name,asc') {
    console.log('sort by name asc');
    wines.sort((a,b) => a.name.localeCompare(b.name))
  }
  else if (sort === 'name,desc') {
    wines.sort((a,b) => b.name.localeCompare(a.name))
  }
  else if (sort === 'price,asc') {
    wines.sort((a,b) => parseFloat(a.price) - parseFloat(b.price))
  }
  else if (sort === 'price,desc') {
    wines.sort((a,b) => parseFloat(b.price) - parseFloat(a.price))
  }
  return {
    wines,
  };
};

export default connect(mapStateToProps)(Wines);
