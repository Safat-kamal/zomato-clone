import axios from 'axios';

const instance = axios.create({
    baseURL : "https://zomato----server.herokuapp.com"
});

export default instance;