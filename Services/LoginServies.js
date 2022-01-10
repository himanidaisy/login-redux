import axios from 'axios';
import { BASE_URL } from '../../API/APIEndpoints';

function LoginServices() {
  //1. Login Auth
  this.Login = async body => await axios.post(BASE_URL + 'auth', body);
  this.requestOtp = async body =>
    await axios.post(BASE_URL + 'auth/forgot/send-email-otp', body);
  this.submitOtp = async body =>
    await axios.post(BASE_URL + 'auth/forgot/validate-email-otp', body);
  this.submitPassword = async body =>
    await axios.post(BASE_URL + 'auth/forgot/change-password', body);
}

export default new LoginServices();
