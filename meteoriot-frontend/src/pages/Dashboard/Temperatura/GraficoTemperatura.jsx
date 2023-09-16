import React from 'react';
import GraficoConfig from './GraficoConfig';

const GraficoTemperatura = () => {
  const chartData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Temperaturas',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1>Histórico de Temperatura</h1>
      <GraficoConfig data={chartData} options={chartOptions} type="bar" />
    </div>
  );
};

export default GraficoTemperatura;