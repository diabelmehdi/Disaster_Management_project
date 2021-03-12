import React from "react";
import RescueHelperService from "../ApiService/RescueHelperService";
import swal from "sweetalert";


export const getQueryStringParams = query => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
      .split('&')
      .reduce((params, param) => {
        let [key, value] = param.split('=');
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
      }, {}
      )
    : {}
};

class reset extends React.Component {
  constructor() {
    super();
    this.state = {
      password: ""
    };
  }
  // Reset password
  handleSubmit = () => {
    const params = getQueryStringParams(window.location.search);

    var data = {
      "token": params["token"],
      "password": this.state.password
    }
    if (!params["token"]) {
      alert("eror");
    } else {
      RescueHelperService.sendReset(data).then(res => {
        this.props.history.push("/LoginResc");
      }).catch(error => swal("Failure", "Something went wrong! Try again!", "error"))
    }
  }
  handleInputChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    return (
      <form >
        <h3>Reset Password</h3>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="enter your password"
            onChange={(e) => (this.handleInputChange(e))}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}
export default reset;
