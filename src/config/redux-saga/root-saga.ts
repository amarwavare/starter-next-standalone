import BaseModuleSaga from "@/modules/base/redux-saga/saga";
import { fork, all } from "redux-saga/effects";

export default function* RootSaga() {
    yield all([
        fork(BaseModuleSaga),
    ])
}