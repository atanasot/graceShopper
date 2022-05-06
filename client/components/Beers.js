import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Beers = ({ beers, match,history  }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div style={{ marginLeft: "270px", marginTop: "100px" }}>
        <Link to="/">Home</Link> / <Link to="/beer">Beers</Link>
      </div>
      <section className="author-archive">
        <div className="container">
          <div style={{ marginBottom: "70px" }}>
            <h1>BEER</h1>
            <div>
              <select value={ match.params.sort } onChange={ ev =>  history.push(`/beer?sort=${ev.target.value}`)}>
                <option value=''> Sort By</option>
                <option value='name,asc'> Name ASC</option>
                <option value='name,desc'> Name DESC</option>
                <option value='price,asc'> Price ASC</option>
                <option value='price,desc'> Price DESC</option>
              </select>
            </div>
          </div>
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
                            <p className="current-price1">${parseFloat(beer.price).toFixed(2)}</p>
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

  console.log(match.params)
  
  const searchParams = new URLSearchParams(location.search) // ?sort=name,asc
  const sort = searchParams.get('sort');

  if (sort === 'name,asc') {
    console.log('sort by name asc');
    beers.sort((a,b) => a.name.localeCompare(b.name))
  }
  else if (sort === 'name,desc') {
    beers.sort((a,b) => b.name.localeCompare(a.name))
  }
  else if (sort === 'price,desc') {
    beers.sort((a,b) => b.price.localeCompare(a.price))
  }
  else if (sort === 'price,desc') {
    beers.sort((a,b) => b.price.localeCompare(a.price))
  }
  return {
    beers,
  };
};

export default connect(mapStateToProps)(Beers);
