import { isAxiosError, AxiosResponse, AxiosInstance } from "axios";
import { SagaIterator } from "redux-saga";
import { call, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "@/config/api/apiClient";
import { dcpBaseReducer } from "@/config/redux-saga/constants";

function* fetchGitHubUser(a: PayloadAction): SagaIterator<void> {
    try {
        let response:AxiosResponse = yield call(apiClient as any, {
            url: 'users/amarwavare',
            data: 'data in payload',
            method: 'get'
        } as unknown as AxiosInstance)
        console.log('response saga ',response.data, a)
    } catch (error: unknown) {
        console.log('error ',error);
        if (isAxiosError(error)) {
            // handle known error
        } else {
            // handle unknown error
        }
    } finally {
        // common logic here
    }
}

export default function* BaseModuleSaga() {
    yield takeLatest(`${dcpBaseReducer}/addNumberAction`, fetchGitHubUser);
}