import React from 'react';
import GraficoConfig from './GraficoConfig';

const GraficoTemperatura = () => {
  // gera grafico automatioco temporario (tirar qnd tiver bd)
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // gera grafico automatioco temporario (tirar qnd tiver bd)
  const generateRandomData = (length, min, max) => {
    const data = [];
    for (let i = 0; i < length; i++) {
      data.push(getRandomInt(min, max));
    }
    return data;
  };

  const chartData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
      {
        label: 'Temperaturas',
        data: generateRandomData(12, -10, 40),
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
      <GraficoConfig data={chartData} options={chartOptions} type="line" />
    </div>
  );
};

export default GraficoTemperatura;