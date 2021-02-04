import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baseUrl, baseUrlLocal } from '../shared/baseUrl';
// const USERS_REST_API_URL = 'http://localhost:8080/User';
class UserService {
    getUser(){
        return axios.get(baseUrl + '/Users');
    }
    postUSer(user){
        return axios.post(baseUrl + 'Users', user);
    }
    getUSerById(userName){
        return axios.get(baseUrl + '/Users/' + userName);
    }
    //for account ??
}
export default new UserService();