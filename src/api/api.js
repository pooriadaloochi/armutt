import Axios from 'axios'

export const getAxiosInstance = () => {
    return Axios.create({
        baseURL: "https://armut.lab.clickzone.ir/api",
        headers: {
            Authorization: 'Bearer' + ' ' + localStorage.getItem('token'),
        }
    });
};
export const getAxiosInstanceAuth = () => {
    return Axios.create({
        baseURL: "https://armut.lab.clickzone.ir/api",
        headers: {}

    })
}

