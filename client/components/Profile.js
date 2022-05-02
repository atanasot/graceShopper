import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../store/auth";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      password: this.props.password, // fix pass to be *****
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
      username: this.state.username,
      password: this.state.password,
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
    const { username, error, password } = this.state;
    const { isAdmin } = this.props;
    const { onChange } = this;
    return (
      <div>
        <h3>
          Welcome, {username}{" "}
          {isAdmin ? "....You have Administrator Privileges" : ""}
        </h3>
        <p> Update Username below:</p>
        <form onSubmit={(ev) => this.onSave(ev)}>
          {error}
          <input name="username" value={username} onChange={onChange} />
          <button disabled={username === this.props.username}>Save</button>
        </form>
        <p> Update Password below:</p>
        <form onSubmit={(ev) => this.onSave(ev)}>
          {error}
          <input name="password" value={password} onChange={onChange} />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    username: state.auth.username,
    password: state.auth.password,
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    update: (user) => dispatch(updateProfile(user)),
  };
};

export default connect(mapState, mapDispatch)(Profile);
