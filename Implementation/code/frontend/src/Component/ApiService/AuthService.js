import axios from "axios";

const AUTH_REST_API_URL = "http://localhost:8080/api";

class AuthService {
  loginUser(usernameValue, passwordValue, pathToRedirect) {
    return axios
      .post(AUTH_REST_API_URL + "/authenticate", {
        username: usernameValue,
        password: passwordValue,
      })
      .then((response) => {
        if (response?.data?.token) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
          window.location.href = pathToRedirect;
        } else {
          localStorage.removeItem("token");
          throw new Error("Unable to login");
        }
      })
      .catch(function (error) {
        if (error.response) {
          localStorage.removeItem("token");
          throw error.response.status;
        }
        throw error;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
