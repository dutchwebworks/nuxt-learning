import axios from "axios";

export default {
    getIpAddress() {
        return axios.get('https://icanhazip.com');
    }
}
