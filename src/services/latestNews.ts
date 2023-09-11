import axios from "axios";
import {api_key} from "../auth/api_key.json";

class LatestNewsService {
    private api_key = api_key;
    async getLatestNews() {
        const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${this.api_key}`);
        return response.data.results;
    }
}

export default new LatestNewsService();