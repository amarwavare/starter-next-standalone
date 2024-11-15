import axios, { Axios, AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import getConfig from "next/config";
import { NextConfig } from "next";
import https from "https";
import { IHttpMethods } from "./interface";

const configuration: NextConfig = getConfig();
const publicRuntimeConfigs = configuration.publicRuntimeConfig;
const apiTimeout:number = 180000;

const httpMethods: IHttpMethods = {
    get: 'get',
    put: 'put',
    post: 'post',
    patch: 'patch',
    delete: 'delete',
};

export const apiClient: AxiosInstance = axios.create({
    baseURL: publicRuntimeConfigs?.NEXT_PUBLIC_API_BASE_URL,
    timeout: apiTimeout,
    httpsAgent: new https.Agent({
        rejectUnauthorized: true,
    }),
});

const onRequestSuccess = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    console.log(config.data)
    return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
}

const onResponseSuccess = (config: AxiosResponse): AxiosResponse => {
    return config;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
}

export const dcpInterceptors = () => {
    apiClient.interceptors.request.use(onRequestSuccess, onRequestError);
    apiClient.interceptors.response.use(onResponseSuccess, onResponseError);
}