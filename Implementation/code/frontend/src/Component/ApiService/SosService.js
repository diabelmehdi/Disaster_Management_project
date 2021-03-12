import axios from "axios";
import authHeader from "./AuthHeader";

const SOS_REST_API_URL = "http://localhost:8080/api/sos";

class SosService {
  getSos() {
    return axios.get(SOS_REST_API_URL, { headers: authHeader() });
  }

  createSos(sos) {
    return axios.post(SOS_REST_API_URL, sos);
  }

  updateTimer(sosId, Timer) {
    return axios.put(SOS_REST_API_URL + "/" + sosId, Timer, {
      headers: { "Content-Type": "application/json" },
    });
  }

  getSOSById(sosId) {
    return axios.get(SOS_REST_API_URL + "/" + sosId);
  }

  getSOSTimerById(sosId) {
    return axios.get(SOS_REST_API_URL + "/timer/" + sosId);
  }

  deleteSOS(latitude) {
    return axios.delete(SOS_REST_API_URL + "/delete/" + latitude);
  }

  updateSOS(sos, sosId) {
    return axios.put(SOS_REST_API_URL + "/" + sosId, sos);
  }
}

export default new SosService();
