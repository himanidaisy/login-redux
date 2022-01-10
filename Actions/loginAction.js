import { Login, LoginFail } from '../constTypes';
import LoginServices from '../Services/LoginServices';

// 1.Login

export const Login = (data, history) => {
  return dispatch => {
    loginServices
      .Login(data)
      .then(res => {
        dispatch(LoginData(res.data.result));
        localStorage.setItem('Token', res.data.Token);
        dispatch(LoginData(res.data));

        history.push('/dashboard');
      })
      .catch(error => {
        console.log('Login', error);
        
      });
  };
};

export const LoginData = data => {
  return {
    type: Login,
    payload: data,
  };
};

export const onLoginFail = data => {
  return {
    type: LoginFail,
    payload: data,
  };
};

// Forgot Password
export const RequestOTP = (data, history) => {
  return dispatch => {
    loginServices
      .requestOtp(data)
      .then(res => {
        console.log('OTP', res);
        
    
        setTimeout(function () {
          history.push('/otp', data);
        }, 2000);
      })
      .catch(error => {
        console.log('OtpErr', error);
      });
  };
};

export const SubmitOTP = (data, history) => {
  return dispatch => {
    authServices
      .submitOtp(data)
      .then(res => {
        console.log('OTPSub', res);
       
       
        setTimeout(function () {
          history.push('/changePassword', data);
        }, 2000);
      })
      .catch(error => {
        console.log('OtpErr', error);
      });
  };
};

export const RequestChange = (data, history) => {
  return dispatch => {
    LoginServices
      .submitPassword(data)
      .then(res => {
        console.log('Password', res);
       
        setTimeout(function () {
          history.push('/');
        }, 2000);
      })
      .catch(error => {
        console.log('Passworderr', error);
      });
  };
};
