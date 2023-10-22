import React, { useEffect, useState } from 'react';
import GraficoConfig from './GraficoConfig';
import axios from 'axios';

const GraficoTemperatura = () => {

  const [historicoTemperaturas, setHistoricoTemperaturas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/temperatura/historicoTemperatura')
    .then((response) => {
      setHistoricoTemperaturas(response.data);
    })
    .catch((error) => {
      console.error("Erro ao buscar o histórico de temperaturas: ", error);
    })
  }, []);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const chartData = {
    labels: historicoTemperaturas.map(temperatura => temperatura.mesTemperatura),
    datasets: [
      {
        label: 'Temperaturas',
        data: historicoTemperaturas.map(temperatura => temperatura.valorTemperatura), 
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: getRandomColor(),
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