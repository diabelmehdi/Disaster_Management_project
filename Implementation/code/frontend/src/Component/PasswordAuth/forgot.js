import React from "react";
import RescueHelperService from "../ApiService/RescueHelperService";
import swal from 'sweetalert';

class forgot extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
    };
  }

  handleSubmit = () => {
    var email = {
      "email": this.state.email
    }
    console.log(email)
    RescueHelperService.sendPasswordEmail(email).then(res => {
      swal("Success", "Check your email and click the link", "success")
    }).catch(error => {
      swal("Failure", "Try again!", "error")
    })
  }

  handleInputChange(e) {
    console.log(this.state.email)
    this.setState({
      email: e.target.value,
    });
  }
  render() {
    return (
      <form>
        <h3>Forgot Password</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="enter your email"
            onChange={(e) => this.handleInputChange(e)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}
export default forgot;
