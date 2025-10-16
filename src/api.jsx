import axios from 'axios'

const API = axios.create({
    baseURL:'http://localhost:8000/api/admin',
    
});
export default API

