import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../store/auth";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName || null,
      lastName: this.props.lastName || null,
      email: this.props.email || null,
      username: this.props.username || null,
      password: this.props.password || null, // fix pass to be *****
      line1: this.props.address.line1,
      line2: this.props.address.line2,
      city: this.props.address.city,
      state: this.props.address.state,
      zip: this.props.address.zip,
      error: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
  }

  async onSave(ev) {
    ev.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      line1: this.state.line1,
      line2: this.state.line2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    };
    try {
      await this.props.update(user);
    } catch (err) {
      console.log({ err });
      this.setState({ error: err.response.data.error });
    }
  }
  // add error section
  render() {
    const {
      username,
      error,
      password,
      firstName,
      lastName,
      email,
      city,
      line1,
      line2,
      zip,
      state,
    } = this.state;
    const { isAdmin } = this.props;
    const { onChange } = this;
    return (
      <div>
        <h3>
          Welcome, {firstName}{" "}
          {isAdmin ? "....You have Administrator Privileges" : ""}
        </h3>
        <p> Update name below:</p>
        <form onSubmit={(ev) => this.onSave(ev)}>
          {error}
          <input name="firstName" value={firstName} onChange={onChange} />
          <button disabled={firstName === this.props.firstName}>Save</button>
        </form>
        <form onSubmit={(ev) => this.onSave(ev)}>
          {error}
          <input name="lastName" value={lastName} onChange={onChange} />
          <button disabled={lastName === this.props.lastName}>Save</button>
        </form>
        <p> Update Username below:</p>
        <form onSubmit={(ev) => this.onSave(ev)}>
          {error}
          <input name="username" value={username} onChange={onChange} />
          <button disabled={username === this.props.username}>Save</button>
        </form>
        <p> Update email below:</p>
        <form onSubmit={(ev) => this.onSave(ev)}>
          {error}
          <input name="email" value={email} onChange={onChange} />
          <button disabled={email === this.props.email}>Save</button>
        </form>
        <p> Update Password below:</p>
        <form onSubmit={(ev) => this.onSave(ev)}>
          {error}
          <input name="password" value={password} onChange={onChange} />
          <button>Save</button>
        </form>
        <p> Update Address below:</p>
        <form onSubmit={(ev) => this.onSave(ev)}>
          {error}
          <input name="line1" value={line1} onChange={onChange} />
          <button>Save</button>
        </form>
        <form onSubmit={(ev) => this.onSave(ev)}>
          {error}
          <input name="line2" value={line2} onChange={onChange} />
          <button>Save</button>
        </form>
        <form onSubmit={(ev) => this.onSave(ev)}>
          {error}
          <input name="city" value={city} onChange={onChange} />
          <button>Save</button>
        </form>
        <form onSubmit={(ev) => this.onSave(ev)}>
          {error}
          <input name="state" value={state} onChange={onChange} />
          <button>Save</button>
        </form>
        <form onSubmit={(ev) => this.onSave(ev)}>
          {error}
          <input name="zip" value={zip} onChange={onChange} />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  if (!state.auth) {
    return null;
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
  };
};

export default connect(mapState, mapDispatch)(Profile);
