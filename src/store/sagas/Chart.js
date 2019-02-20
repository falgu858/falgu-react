import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

function* watchFetchChartMetric(action) {
   const {error, data} = yield call (API.getChartMetricData);
   if (error) {
    console.log({ error });
    yield put({ type: actions.API_ERROR, code: error.code });
    yield cancel();
    return;
  }
  yield put({ type: actions.CHART_METRIC_DATA_RECEIVED, data})
}

function* ChartMetricAppLoad() {
    yield all([
        takeEvery(actions.FETCH_CHART_METRIC, watchFetchChartMetric),
      ]);
}

export default [ChartMetricAppLoad];