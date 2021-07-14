import {getAxiosInstance} from "./api";


export const getProducts = (callback) => {
    getAxiosInstance().get("/v1/product/all")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error);
    })
}

export const getSingleProduct = (callback) => {
    getAxiosInstance().get("/v1/product/1")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
        console.log(error);
        callback(false, error);
    })
}
