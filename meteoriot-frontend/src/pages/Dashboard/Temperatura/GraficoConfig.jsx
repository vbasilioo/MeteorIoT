import React, { Component } from 'react';
import { Chart, CategoryScale, LinearScale, Title, Tooltip, BarElement } from 'chart.js/auto';

class GraficoConfig extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart() {
    const { data, options, type } = this.props;

    const ctx = this.chartRef.current.getContext('2d');

    if (this.chart) {
      this.chart.destroy(); 
    }

  this.chart = new Chart(ctx, {
      type: type || 'bar',
      data,
      options: {
        scales: {
          x: {
            type: 'category',
            labels: data.labels,
          },
          y: {
            beginAtZero: true,
          },
        },
        ...options,
      },
    });
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default GraficoConfig;