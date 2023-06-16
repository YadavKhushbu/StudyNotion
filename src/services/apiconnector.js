import axios from "axios";
export const axiosInstance = axios.create({});

export const apiConnector = (method,url,bodyData,headers,params ) =>{
    return axiosInstance({
        method: `${method}`,
        url :`${method}`,
        data: bodyData ? bodyData :url,
        headers :headers ? headers:null,
        params :params ? params:null,
    });
}