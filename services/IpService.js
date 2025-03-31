import axios from "axios";

const IpService = axios.create();

export default {
    getIpAddress() {
        return IpService.get('https://icanhazip.com');
    }
}
