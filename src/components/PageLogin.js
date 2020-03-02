import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../redux/thunk-functions";

class PageLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          username: null
        };

        this.loginHandler = this.loginHandler.bind(this);
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
      }

      componentDidUpdate() {
        if (this.props.user === null) {
          return;
        }

        this.props.history.push("/list");
      }

      usernameChangeHandler(e) {
        this.setState({ username: e.target.value });
      }

      loginHandler(e) {
        e.preventDefault();
        this.props.login(this.state.username);
      }


    render() {
        const user = this.props.user;
        if(user !== null){
            return <h2>User {user.full_name} is already logged in.</h2>;
        }
        return (
            <div align="center">
                <h2>Login</h2>
                <form onSubmit={e => this.loginHandler(e)}>
                    <input
                        type="text"
                        placeholder="Enter Your username"
                        onChange={this.usernameChangeHandler}
                    />
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state /* , ownProps */) => {
    return {
        user: state.user
    };
  };

  const mapDispatchToProps = dispatch => ({
    login: name => dispatch(login(name))
});

  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageLogin)); 