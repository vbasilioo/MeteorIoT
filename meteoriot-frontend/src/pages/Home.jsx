import React, { Fragment, useEffect, useState } from "react";

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

  const divStyle = {
    backgroundImage: `url('https://www.upload.ee/image/15895535/photo-1563981980162-c6314c795de4.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="container">
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
      <symbol id="check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
      </symbol>
      <symbol id="circle-half" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
      </symbol>
      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
      </symbol>
      <symbol id="sun-fill" viewBox="0 0 16 16">
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
      </symbol>
    </svg>
    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (dark)">
          <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
          <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
          <li>
            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
              <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
              Light
              <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
            </button>
          </li>
          <li>
            <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="dark" aria-pressed="true">
              <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
              Dark
              <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
            </button>
          </li>
          <li>
            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
              <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
              Auto
              <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
            </button>
          </li>
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="aperture" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
        </symbol>
        <symbol id="cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </symbol>
        <symbol id="chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
        </symbol>
      </svg>
      <div class="container">
          <header class="border-bottom lh-1 py-3">
            <div class="row flex-nowrap justify-content-between align-items-center">
              <div class="col-4 pt-1">
                <a class="link-secondary">Acompanhe!</a>
              </div>
              <div class="col-4 text-center">
                <a class="blog-header-logo text-body-emphasis text-decoration-no  ne">MeteorIoT</a>
              </div>
              <div class="col-4 d-flex justify-content-end align-items-center">
                <a class="link-secondary" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Pesquisar</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                </a>
                <a class="btn btn-sm btn-outline-secondary" href="/login">Entrar</a>
              </div>
            </div>
          </header>

          <div class="nav-scroller py-1 mb-3 border-bottom">
            <nav class="nav nav-underline justify-content-between">
              <a class="nav-item nav-link link-body-emphasis active">Meteorologia</a>
              <a class="nav-item nav-link link-body-emphasis">Meio-ambiente</a>
              <a class="nav-item nav-link link-body-emphasis">Tecnologia</a>
              <a class="nav-item nav-link link-body-emphasis">Cultura</a>
              <a class="nav-item nav-link link-body-emphasis">Reservas</a>
              <a class="nav-item nav-link link-body-emphasis">Animais</a>
              <a class="nav-item nav-link link-body-emphasis">Hospedagens</a>
              <a class="nav-item nav-link link-body-emphasis">Ecoturismo</a>
              <a class="nav-item nav-link link-body-emphasis">Trilhas</a>
              <a class="nav-item nav-link link-body-emphasis">Cachoeiras</a>
              <a class="nav-item nav-link link-body-emphasis">Viagens</a>
              <a class="nav-item nav-link link-body-emphasis">Galeria</a>
            </nav>
          </div>
        </div>
        <main class="container">
          <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary" style={divStyle}>
            <div class="col-lg-6 px-0">
              <h1 class="display-4 fst-italic">MeteorIoT: O seu site de meteorologia.</h1>
              <p class="lead my-3">A meteorologia vai muito além do que informar e monitorar sobre previsão do tempo. É possível identificar eventos climatológicos e agir para que os seus efeitos sejam mitigados, a exemplo das enchentes.</p>
            </div>
          </div>

          <div class="row mb-2">
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary-emphasis">Temperatura</strong>
                  { temperaturaAtual ?
                  (
                    <Fragment>
                      <h3 class="mb-0">{temperaturaAtual.valorTemperatura}°C</h3>
                      <div class="mb-1 text-body-secondary">{temperaturaAtual.dataTemperatura}</div>
                      { temperaturaAtual.valorTemperatura >= 0 && temperaturaAtual.valorTemperatura < 11 ?
                      (
                        <p class="card-text mb-auto">Prepare-se para enfrentar um clima gélido! Com temperaturas entre 0 e 10 graus Celsius, é hora de tirar os casacos mais pesados do armário. Este frio intenso pode representar perigos para os bebês recém-nascidos e idosos, que são mais sensíveis às baixas temperaturas. Certifique-se de agasalhar bem os pequenos, evitando exposição prolongada ao ar gelado. Além disso, esteja atento às estradas, pois a formação de gelo pode tornar as condições de direção desafiadoras.</p>
                      ) : temperaturaAtual.valorTemperatura >= 11 && temperaturaAtual.valorTemperatura < 21 ?
                      (
                        <p class="card-text mb-auto">A temperatura está amena, perfeita para um clima confortável e agradável. Com variações entre 11 e 20 graus Celsius, este é o momento ideal para desfrutar de atividades ao ar livre. No entanto, mesmo com a temperatura mais amena, é sempre bom carregar uma camada extra, já que as noites podem ficar um pouco mais frias. Aproveite para explorar a natureza ou realizar atividades físicas ao ar livre sem se preocupar com extremos de calor ou frio.</p>
                      ) 
                      : temperaturaAtual.valorTemperatura >= 21 && temperaturaAtual.valorTemperatura < 31 ? 
                      (
                        <p class="card-text mb-auto">Bem-vindo à zona de conforto térmico! Com temperaturas variando entre 21 e 30 graus Celsius, espere dias agradáveis e noites suaves. Este clima moderado é ideal para diversas atividades, desde passeios ao ar livre até eventos sociais. No entanto, lembre-se de se proteger contra a exposição prolongada ao sol, usando protetor solar e hidratando-se adequadamente. Aproveite o clima agradável e mantenha-se atento às recomendações de saúde para desfrutar plenamente desta faixa de temperatura.</p>
                      ) : temperaturaAtual.valorTemperatura >= 31 && temperaturaAtual.valorTemperatura < 41 ?
                      (
                        <p class="card-text mb-auto">Prepare-se para dias quentes! Com temperaturas variando entre 31 e 40 graus Celsius, é crucial tomar medidas para evitar a exposição excessiva ao calor. Certifique-se de manter-se hidratado, procurar sombras durante as horas mais quentes do dia e evitar atividades físicas extenuantes. Este calor intenso pode representar riscos à saúde, especialmente para grupos mais vulneráveis, como idosos e crianças pequenas. Esteja ciente dos sinais de superaquecimento e tome precauções para garantir o seu bem-estar durante esse período de calor intenso.</p>
                      ) : ('')
                      }
                    </Fragment>
                  ) : (
                    ''
                  )
                  }
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-success-emphasis">Umidade</strong>
                  { umidade ?
                  (
                    <Fragment>
                      <h3 class="mb-0">{umidade.valorUmidade}%</h3>
                      <div class="mb-1 text-body-secondary">{umidade.dataUmidade}</div>
                      { umidade.valorUmidade >= 0 && umidade.valorUmidade < 11 ?
                        (
                          <p class="card-text mb-auto">Atenção! A umidade está muito baixa (0-10%). Isso pode levar a ressecamento da pele, desconforto nos olhos e irritação nas vias respiratórias. Certifique-se de manter-se bem hidratado, usar hidratantes e considerar o uso de um umidificador para aumentar a umidade em ambientes fechados.</p>
                        ) : umidade.valorUmidade >= 11 && umidade.valorUmidade < 21 ?
                        (
                          <p class="card-text mb-auto">A umidade está baixa (11-20%). Níveis mais altos de umidade são ideais para o conforto, então certifique-se de beber bastante água e usar hidratantes para minimizar o desconforto causado pelo ressecamento da pele e mucosas.</p>
                        ) 
                        : umidade.valorUmidade >= 21 && umidade.valorUmidade < 31 ? 
                        (
                          <p class="card-text mb-auto">A umidade está moderada (21-30%). Este é um intervalo confortável para a maioria das pessoas. Continue a se manter bem hidratado e aproveite as condições ideais para o bem-estar geral.</p>
                        ) : umidade.valorUmidade >= 31 && umidade.valorUmidade < 41 ?
                        (
                          <p class="card-text mb-auto">A umidade está um pouco elevada (31-40%). Isso pode ser desconfortável para algumas pessoas, especialmente se associado a altas temperaturas. Garanta uma boa ventilação e evite atividades físicas intensas durante esses períodos.</p>
                        ) : umidade.valorUmidade >= 41 && umidade.valorUmidade < 51 ?
                        (
                          <p class="card-text mb-auto">A umidade está entre 41-50%. Mantenha-se atento, pois níveis mais altos podem começar a causar desconforto, especialmente se persistirem. Certifique-se de manter uma boa ventilação e evitar atividades físicas intensas.</p>
                        ) : umidade.valorUmidade >= 51 && umidade.valorUmidade < 61 ?
                        (
                          <p class="card-text mb-auto">A umidade está entre 51-60%. Este é um nível moderado, mas fique atento à possibilidade de desconforto, especialmente se persistir. Garanta uma boa ventilação em ambientes fechados e mantenha-se hidratado.</p>
                        ) : umidade.valorUmidade >= 61 && umidade.valorUmidade < 71 ?
                        (
                          <p class="card-text mb-auto">A umidade está entre 61-70%. Níveis moderados que podem começar a ser desconfortáveis para algumas pessoas. Garanta uma boa ventilação e considere o uso de desumidificadores em ambientes fechados.</p>
                        ) : umidade.valorUmidade >= 71 && umidade.valorUmidade < 81 ?
                        (
                          <p class="card-text mb-auto">A umidade está entre 71-80%. Este é um nível elevado que pode causar desconforto significativo. Garanta uma boa ventilação e evite atividades físicas intensas, especialmente em ambientes abafados.</p>
                        ) : umidade.valorUmidade >= 81 && umidade.valorUmidade < 91 ?
                        (
                          <p class="card-text mb-auto">A umidade está entre 81-90%. Níveis muito elevados que podem ser prejudiciais à saúde. Mantenha-se em ambientes frescos, bem ventilados e evite exposição prolongada.</p>
                        ) : umidade.valorUmidade >= 91 && umidade.valorUmidade <= 100 ?
                        (
                          <p class="card-text mb-auto">Cuidado! A umidade está muito alta (91-100%). Isso pode causar desconforto, problemas respiratórios e até mesmo danos ao ambiente, como mofo. Mantenha-se em ambientes bem ventilados e evite atividades físicas intensas em ambientes úmidos.</p>
                        ) : ('')
                      }
                    </Fragment>
                  ) : (
                    ''
                  )
                  }
                </div>
              </div>
            </div>
          </div>

          <div class="row g-5">
            <div class="col-md-8">
              <h3 class="pb-4 mb-4 fst-italic border-bottom">
                Sobre o MeteorIoT
              </h3>
              <article class="blog-post">
                <p class="blog-post-meta" style={{textAlign: 'justify'}}>MeteorIoT vai além de ser apenas uma plataforma de informações meteorológicas; somos um portal dedicado ao meio ambiente. Nosso compromisso com a sustentabilidade e a compreensão aprofundada das condições climáticas é o que nos impulsiona. Ao visitar o MeteorIoT, você não apenas obtém atualizações precisas sobre o clima, mas também mergulha em uma experiência completa voltada para a conscientização ambiental.</p>
                <p class="blog-post-meta" style={{textAlign: 'justify'}}>Nossa equipe de meteorologistas e ambientalistas trabalha em conjunto para oferecer uma visão abrangente das interações entre o clima e o meio ambiente. Além das previsões meteorológicas precisas, você encontrará análises detalhadas sobre o impacto das condições climáticas nas paisagens locais e globais. Acreditamos que compreender o clima é crucial para a preservação do nosso planeta, e é por isso que estamos empenhados em fornecer informações educativas sobre questões ambientais.</p>
                <p class="blog-post-meta" style={{textAlign: 'justify'}}>Explore seções dedicadas à biodiversidade, mudanças climáticas, conservação e práticas sustentáveis. Queremos capacitar nossos usuários a tomar decisões informadas não apenas em relação ao clima imediato, mas também em como podem contribuir para um ambiente mais saudável e equilibrado.</p>
                <p class="blog-post-meta" style={{textAlign: 'justify'}}>Ao escolher o MeteorIoT, você não apenas se beneficia de previsões meteorológicas confiáveis, mas também se junta a uma comunidade que valoriza a preservação do meio ambiente. Juntos, podemos fazer escolhas conscientes e criar um impacto positivo em nosso planeta. Bem-vindo ao MeteorIoT, onde a preocupação com o clima é o nosso guia para um futuro sustentável.</p>
              </article>
            </div>
            <div class="col-md-4">
              <div class="position-sticky" style={{top: '2rem'}}>
                <div class="p-4 mb-3 bg-body-tertiary rounded">
                  <h4 class="fst-italic">Sobre</h4>
                  <p class="mb-0" style={{textAlign: 'justify'}}>Bem-vindo ao MeteorIoT, a sua fonte confiável de informações meteorológicas e muito mais. Estamos dedicados a fornecer aos nossos usuários as informações mais precisas e atualizadas sobre o clima, juntamente com uma variedade de serviços e recursos relacionados à meteorologia. Nosso compromisso com a qualidade e a precisão é o que nos diferencia. Com uma equipe de meteorologistas experientes e entusiastas da tecnologia, estamos constantemente trabalhando para manter você informado sobre as condições meteorológicas em sua região, seja para planejar seu dia a dia ou para se preparar para eventos climáticos significativos.</p>
                </div>
                <div>
                  <h4 class="fst-italic">Notícias recentes</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                        <div class="col-lg-8">
                          <h6 class="mb-0"><a href="https://g1.globo.com/pa/para/noticia/2023/11/10/garimpo-ilegal-avanca-10-mil-hectares-na-bacia-do-xingu-no-para-desde-2018-aponta-instituto-lideranca-diz-que-indigenas-sofrem-prejuizo.ghtml">Garimpo ilegal avança 10 mil hectares na bacia do Xingu no Pará desde 2018, aponta instituto; liderança diz que indígenas sofrem prejuízo.</a></h6>
                          <small class="text-body-secondary">10 de novembro de 2023</small>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                        <div class="col-lg-8">
                          <h6 class="mb-0"><a href="https://g1.globo.com/meio-ambiente/noticia/2023/11/10/onda-de-calor-ganha-forca-no-sudeste-e-no-centro-oeste-previsao-e-de-temperaturas-mais-altas-na-proxima-semana.ghtml">Onda de calor ganha força no Sudeste e no Centro-Oeste; previsão é de temperaturas mais altas na próxima semana.</a></h6>
                          <small class="text-body-secondary">10 de novembro de 2023</small>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                        <div class="col-lg-8">
                          <h6 class="mb-0"><a href="https://g1.globo.com/meio-ambiente/noticia/2023/11/09/inpe-taxa-de-desmatamento-na-amazonia-cai-em-22percent.ghtml">Inpe: taxa de desmatamento na Amazônia cai 22%</a></h6>
                          <small class="text-body-secondary">09 de novembro de 2023</small>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="p-4">
                  <h4 class="fst-italic">Arquivos</h4>
                  <ol class="list-unstyled mb-0">
                    <li><a>Dezembro de 2023</a></li>
                    <li><a>Novembro de 2023</a></li>
                    <li><a>Outubro de 2023</a></li>
                    <li><a>Setembro de 2023</a></li>
                    <li><a>Agosto de 2023</a></li>
                    <li><a>Julho de 2023</a></li>
                    <li><a>Junho de 2023</a></li>
                    <li><a>Maio de 2023</a></li>
                    <li><a>Abril de 2023</a></li>
                    <li><a>Março de 2023</a></li>
                    <li><a>Fevereiro de 2023</a></li>
                    <li><a>Janeiro de 2023</a></li>
                  </ol>
                </div>

                <div class="p-4">
                  <h4 class="fst-italic">Sites</h4>
                  <ol class="list-unstyled">
                    <li><a href="https://github.com/vbasilioo/MeteorIoT">GitHub</a></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="py-5 text-center text-body-secondary bg-body-tertiary">
          <p>Site construído por <a>Eric</a>, <a>Maria Clara</a> e <a>Vinícius</a>.</p>
        </footer>
      </div>
  );
};

export default Home;