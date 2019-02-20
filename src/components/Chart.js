import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { withStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

const cardStyles = theme => ({
  root: {
    background: 'initial'
  },
  title: {
    color: "initial",
    textAlign: 'center',
  }
});

const CardHeader = withStyles(cardStyles)(CardHeaderRaw);
const styles = {
  card: {
    margin: "5% 25%"
  }
};
class MetricChart extends Component {
    async componentDidMount() {
      try {
        setInterval(async () => {
          this.props.onLoad();
        }, 5000);
      } catch(e) {
        console.log(e);
      }
}
      render() {
        const { metricData, classes } = this.props;
          return (
         <Card className={classes.card}>
         <CardHeader title="Sample Drone Teparature?" />
           <LineChart
              width={500}
              height={300}
              data={metricData}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hours" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="metRic" stroke="#2d7fb8" activeDot={{ r:4 }} />
            </LineChart>
            </Card>
          );
  
}
      
}
const mapState = (state, ownProps) => {
   const {
     metricData
  } = state.chart;
  return {
    metricData
  };
};
const mapDispatch = dispatch => ({
    onLoad: () =>
      dispatch({
        type: actions.FETCH_CHART_METRIC
      })
  });

  export default connect(
    mapState,
    mapDispatch
  )(withStyles(styles) (MetricChart));
