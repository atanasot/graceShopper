import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile } from "../store/auth";
import { fetchCustomers, updateAddress } from "../store/customers";
import { fetchOrders } from "../store/orders";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: this.props.createdAt || "",
      id: this.props.id || "",
      firstName: this.props.firstName || "",
      lastName: this.props.lastName || "",
      email: this.props.email || "",
      username: this.props.username || "",
      password: this.props.password || "", // fix pass to be *****
      line1: this.props.address ? this.props.address.line1 : "",
      line2: this.props.address ? this.props.address.line2 : "",
      city: this.props.address ? this.props.address.city : "",
      state: this.props.address ? this.props.address.state : "",
      zip: this.props.address ? this.props.address.zip : "",
      error: "",
      data: {},
    };
  }
  componentDidMount() {
    this.props.fetchOrders();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
    axios.get(url).then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }

  render() {
    const {
      id,
      username,
      firstName,
      lastName,
      email,
      city,
      line1,
      line2,
      zip,
      state,
      data,
    } = this.state;

    let today = new Date();
    let time = today.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    let hours = today.getHours();
    let month = today.getMonth();
    let day = today.getUTCDate();
    let year = today.getFullYear();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const displayGreeting = () => {
      if (hours < 11) {
        return "good morning";
      }
      if (hours > 17) {
        return "good evening";
      } else {
        return "good afternoon";
      }
    };
    const { orders, isAdmin } = this.props;
    return (
      <div>
        <div style={{ marginTop: "100px", marginLeft: "270px" }}>
          <span
            style={{
              textDecoration: "underline",
            }}
          >
            <Link to="/">Home</Link>
          </span>
        </div>
        <h1
          className="H1Background"
          style={{ marginBottom: "-100px", marginTop: "-50px" }}
        >
          Profile
        </h1>
        <div id="dashboard-container">
          <div className="leftside-menu">
            <div className="avatar">
              <div className="icon">
                <Link to="/Profile">
                  <p>
                    {firstName.charAt(0)}
                    {lastName.charAt(0)}
                  </p>
                </Link>
              </div>
              <p>
                {firstName}, {lastName}
              </p>
            </div>
            <div className="avatar">
              <div className="icon">
                <Link to="/profileupdate">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-gear"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                    </svg>
                  </p>
                </Link>
              </div>
              <p>Profile Setting</p>
            </div>
            <div className="avatar">
              <div className="icon">
                <Link to="/addressupdate">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-house-door"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                    </svg>
                  </p>
                </Link>
              </div>
              <p>Address Setting</p>
            </div>
          </div>

          <div className="main-grid">
            <div className="item one">
              {isAdmin ? (
                <p className="p1111" style={{ marginBottom: "5px" }}>
                  Welcome, Admin
                </p>
              ) : (
                <p className="p1111" style={{ marginBottom: "5px" }}>
                  Welcome
                </p>
              )}
              <h1 className="p1111" style={{ margin: "35px" }}>
                {months[month]} {day}, {year}
              </h1>
              <p className="p1111">
                {displayGreeting()}, {firstName}
              </p>
              <h1 className="p1111">{time}</h1>
            </div>
            <div className="item two">
              <div className="music">
                <p className="p1111">Email:</p>
                <p className="p1111">{email}</p>
                <br />
                <p className="p1111">Username:</p>
                <p className="p1111">{username}</p>
              </div>
            </div>
            <div className="item three">
              <h2 className="h21111">
                <i className="fas fa-cloud-sun" />{" "}
                {data.main ? <span>{data.main.temp.toFixed()}°F</span> : null}
              </h2>
              <div className="weather">
                <p className="p1111">
                  {" "}
                  {data.weather ? <span>{data.weather[0].main}</span> : null}
                </p>
                <p className="city p1111">{data.name}</p>
              </div>
            </div>
            <div className="item four">
              <h1 id="date" />
              <p className="p1111">
                <p className=".a1111" style={{ marginTop: "-50px" }}>
                  <p className=".a1111">Address:</p>
                  {line1} {line2}, {city}, {state}, {zip}
                </p>
              </p>
            </div>
            <div className="item five">
              <div>
                {isAdmin ? (
                  <img
                    src="/images/stannie.png"
                    style={{
                      width: 180,
                      height: 180,
                      marginLeft: "40px",
                      marginTop: "40px",
                    }}
                  />
                ) : (
                  <img
                    style={{
                      width: 180,
                      height: 180,
                      marginLeft: "40px",
                      marginTop: "40px",
                    }}
                    src={`https://avatars.dicebear.com/api/human/${id}.svg`}
                  />
                )}
              </div>
              <br />
              <p className="p1111" style={{ marginLeft: "60px" }}>
                Profile picture
              </p>
            </div>
            <div className="item six">
              <div className="reminders">
                <p className="p1111">
                  <Link to="/orders">
                    <h1 className="profileh1">Orders History</h1>
                  </Link>
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        //{" "}
      </div>
    );
  }
}

const mapState = (state) => {
  if (!state.auth) {
    return {};
  }
  return {
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    email: state.auth.email,
    username: state.auth.username,
    password: state.auth.password,
    isAdmin: state.auth.isAdmin,
    address: state.auth.address,
  };
};

const mapDispatch = (dispatch) => {
  return {
    update: (user) => dispatch(updateProfile(user)),
    updateAddress: (address) => dispatch(updateAddress(address)),
    fetchCustomers: () => dispatch(fetchCustomers()),
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

export default connect(mapState, mapDispatch)(Profile);
