import React, { useEffect, useState } from 'react';
import GraficoConfig from './GraficoConfig';
import axios from 'axios';

const GraficoTemperatura = () => {
  const [historicoTemperaturas, setHistoricoTemperaturas] = useState([]);
  const [historicoUmidade, setHistoricoUmidade] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/temperatura/historicoTemperatura')
      .then((response) => {
        setHistoricoTemperaturas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar o histórico de temperaturas: ", error);
      });

    axios.get('http://localhost:8080/umidade')
      .then((response) => {
        setHistoricoUmidade(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar o histórico de umidades: ", error);
      });
  }, []);

  const chartData = {
    labels: historicoTemperaturas.map((temperatura) => temperatura.mesTemperatura),
    datasets: [
      {
        label: 'Temperaturas',
        data: historicoTemperaturas.map((temperatura) => temperatura.valorTemperatura),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        yAxisID: 'temperatura',
      },
      {
        label: 'Umidade',
        data: historicoUmidade.map((umidade) => umidade.valorUmidade),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        yAxisID: 'umidade',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: [
        {
          id: 'temperatura',
          type: 'linear',
          position: 'left',
        },
        {
          id: 'umidade',
          type: 'linear',
          position: 'right',
        },
      ],
    },
  };

  return (
    <div>
      <h1>Histórico de Temperatura e Umidade</h1>
      <GraficoConfig data={chartData} options={chartOptions} type="line" />
    </div>
  );
};

export default GraficoTemperatura;