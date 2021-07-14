import {getAxiosInstance, getAxiosInstanceAuth} from "./api";


export const LoginApi = (user, callback) => {
    getAxiosInstance().post("v1/login", user)
        .then(response => {
            const data = response.data
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error.response.data.message);
    })
}
export const RegisterApi = (user, callback) => {
    getAxiosInstanceAuth().post("v1/register", user)
        .then(response => {
            const data = response.data
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error.response.data.message);
    })
}
export const VerifyApi = (userV, callback) => {
    getAxiosInstanceAuth().post("v1/mobile/verify", userV)
        .then(response => {
            const data = response.data
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error.response.data.message);
    })
}
export const ForgotApi = (user, callback) => {
    getAxiosInstanceAuth().post("v1/password/reset/send", user)
        .then(response => {
            const data = response.data
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error.response.data.message);
    })
}
export const VerifyForgotApi = (userV, callback) => {
    getAxiosInstanceAuth().post("v1/password/reset/check-verify-code", userV)
        .then(response => {
            const data = response.data
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error.response.data.message);
    })
}
export const ResetPassApi = (userP, callback) => {
    getAxiosInstance().put("v1/password/reset/change", userP)
        .then(response => {
            const data = response.data
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error.response.data.message);
    })
}
export const SetPassApi = (userP, callback) => {
    getAxiosInstance().post("v1/password/set", userP)
        .then(response => {
            const data = response.data
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error.response.data.message);
    })
}
