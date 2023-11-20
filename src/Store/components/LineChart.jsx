import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

class YourChartComponent extends React.Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      series: [{
        name: 'PRODUCT A',
        data: data.map((item) => item.revenue),
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          type: 'datetime',
          categories: data.map((item) => item.date),
        },
        legend: {
          position: 'right',
          offsetY: 40,
        },
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      const { data } = this.props;

      this.setState({
        series: [{
          name: 'PRODUCT A',
          data: data.map((item) => item.revenue),
        }],
        options: {
          ...this.state.options,
          xaxis: {
            ...this.state.options.xaxis,
            categories: data.map((item) => item.date),
          },
        },
      });
    }
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="100%" />
    );
  }
}

export default YourChartComponent;
