import React from "react";
import createStore from "./store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "./components/Wrapper";
import MetricChart from "./components/Chart";

const store = createStore();
const App = props => (
    <Provider store={store}>
      <Wrapper>
        <MetricChart />
      </Wrapper>
    </Provider>
);

export default App;
