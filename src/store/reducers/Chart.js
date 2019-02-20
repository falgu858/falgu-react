import * as actions from "../actions";


const initialState = {
    data: [],
    metricData: [],
  };
  export function addZero(i) {
      if (i < 10) {
      i = "0" + i;
      }
      return i;
   }
  export function getHours(timestamp){
    let d = new Date(timestamp);
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    return h + ":" + m;
  }
  export function fiterData(data) {
    const arr = [];
    data.forEach((item)=>{
     let chartItem = {};
      chartItem.metRic = item.metric;
      chartItem.hours = getHours(item.timestamp);
      arr.push(chartItem);
    })
    return arr;
   }

  export function chartMetricReducer (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_CHART_METRIC':
        return { ...state };
        case 'CHART_METRIC_DATA_RECEIVED':
        return { ...state, data: [...action.data.data], metricData: fiterData(action.data.data) };
        default:
        return state;
    }
  }
