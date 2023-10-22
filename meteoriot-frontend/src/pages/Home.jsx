import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  const [temperaturaAtual, setTemperaturaAtual] = useState(null);
  const [umidade, setUmidade] = useState(null);

  const fetchTemperatura = async() => {
    try{
      const response = await fetch('http://localhost:8080/temperatura/historicoTemperatura');
      const data = await response.json();

      const temperaturaAtual = data.reduce((max, temperatura) => {
        const dataHoraAtual = new Date(`${temperatura.dataTemperatura} ${temperatura.horaTemperatura}`);
        const dataHoraMax = new Date(`${max.dataTemperatura} ${max.horaTemperatura}`);
        return dataHoraAtual > dataHoraMax ? temperatura : max;
      }, data[0]);

      setTemperaturaAtual((prevData) => {
        const newData = { ...temperaturaAtual, key: new Date().toISOString() };
        return newData;
      });
    }catch(error){
      console.error("Erro ao buscar a temperatura: ", error);
    }
  };

  const fetchUmidade = async() => {
    try{
      const response = await fetch('http://localhost:8080/umidade/ultimaUmidade');
      const data = await response.json();
      setUmidade(data); 
    }catch(error){
      console.error("Erro ao buscar a umidade: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async() => {
      await fetchTemperatura();
      await fetchUmidade();
    };

    fetchData();

    const intervalId = setInterval(async() => {
      await fetchTemperatura();
      await fetchUmidade();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="d-flex flex-column vh-100 bg-dark">
      <Navbar />
      <hr className="my-4" style={{ borderBottom: '2px solid white' }} />
      <div className="flex-grow-1 bg-dark d-flex justify-content-center align-items-center">
        <div className="card text-black bg-white">
          <div className="card-body">
            <h5 className="card-title text-center">Temperatura: </h5>
            {temperaturaAtual ? 
            (
              <div key={temperaturaAtual.key} className="text-center">{temperaturaAtual.valorTemperatura}°C</div>
            ) 
            : 
            (
              <p key="loading">Carregando...</p>
            )}
            <br />
            <p className="card-title text-center">Umidade:</p>
            {umidade ?
            (
              <div className="text-center">{umidade.valorUmidade}%</div>
            )
            :
            (
              <p>Carregando...</p>
            )
            }
          </div>
        </div>
      </div>

      <hr className="my-4" style={{ borderTop: '2px solid white' }} />

      {/* Sobre Nós */}
      <div id="sobre-nos" className="container mt-5 text-white">
        <h2 className="text-center">Sobre Nós</h2>
        <div className="row mt-4 d-flex justify-content-center align-items-center">
          <div className="col-lg-4 mb-4 text-center">
            <img
              src="https://www.upload.ee/image/15776273/WhatsApp_Image_2023-10-07_at_10.55.48_AM.jpeg"
              alt="Eric Mendes"
              className="rounded-circle mb-2 mx-auto"
              style={{ maxWidth: '200px', maxHeight: '150px' }}
            />
            <h4 className="text-center">Eric Mendes</h4>
            <p className="text-justify">
              Nosso especialista em dar vida à experiência do usuário.
              Como desenvolvedor frontend, Eric traduz sua paixão por tecnologia em interfaces
              envolventes para os usuários do MeteorIoT.
            </p>
          </div>

          <div className="col-lg-4 mb-4 text-center">
            <img
              src="https://www.upload.ee/image/15776283/WhatsApp_Image_2023-10-07_at_10.56.40_AM.jpeg"
              alt="Maria Clara"
              className="rounded-circle mb-2 mx-auto"
              style={{ maxWidth: '200px', maxHeight: '150px' }}
            />
            <h4 className="text-center">Maria Clara</h4>
            <p className="text-justify">
              Mente criativa que transforma informações meteorológicas em experiências
              visuais memoráveis. Como desenvolvedora frontend, ela combina o design e
              funcionalidade para criar interfaces atraentes e acessíveis.
            </p>
          </div>

          <div className="col-lg-4 mb-4 ml-auto text-center">
            <img
              src="https://www.upload.ee/image/15776285/WhatsApp_Image_2023-10-07_at_10.55.41_AM.jpeg"
              alt="Vinícius Basílio"
              className="rounded-circle mb-2 mx-auto"
              style={{ maxWidth: '200px', maxHeight: '150px' }}
            />
            <h4 className="text-center">Vinícius Basílio</h4>
            <p className="text-justify">
              Arquiteto digital por trás da solidez do MeteorIoT. Da coleta de dados até
              o design de interfaces, Vinícius garante que cada componente do sistema
              funcione em harmonia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
    return (
        <div>
            <Navbar />
        </div>
    );
};

export default Home;