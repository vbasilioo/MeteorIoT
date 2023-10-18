import serial
import requests
import time
from datetime import datetime

ser = serial.Serial('/dev/ttyACM0', 9600)

temperatura_url = "http://localhost:8080/temperatura"
umidade_url = "http://localhost:8080/umidade"

data_atual = datetime.now().isoformat()
hora_atual = datetime.now().time()  
hora_formatada = hora_atual.strftime("%H:%M:%S")

while True:
    line = ser.readline().decode('UTF-8').strip()
    print(line)

    if "Temperatura" in line:
        try:
            valor_temperatura = float(line.split(" ")[-1])
        except (IndexError, ValueError) as e:
            print("Erro ao extrair valor de temperatura:", str(e))
            continue

        payloadTemperatura = {
            "valorTemperatura": valor_temperatura,
            "tipoTemperatura": "Celsius",  
            "dataTemperatura": data_atual,
            "horaTemperatura": hora_formatada,
        }

        try:
            response = requests.post(temperatura_url, json=payloadTemperatura)
            if response.status_code == 201:
                print("Dados enviados com sucesso para o backend.")
            else:
                print("Erro ao enviar dados para o backend. Código de status:", response.status_code)
        except Exception as e:
            print("Erro ao conectar com o backend:", str(e))
    if "Umidade" in line:
        try:
            valor_umidade = float(line.split(" ")[-1])
        except:
            print("Erro ao extrair valor de temperatura:", str(e))
            continue

        payloadUmidade = {
            "valorUmidade": valor_umidade,
            "dataUmidade": data_atual,
            "horaUmidade": hora_formatada,
        }

        try:
            response = requests.post(umidade_url, json=payloadUmidade)
            if response.status_code == 201:
                print("Dados enviados com sucesso para o backend.")
            else:
                print("Erro ao enviar dados para o backend. Código de status:", response.status_code)
        except Exception as e:
            print("Erro ao conectar com o backend:", str(e))

    time.sleep(5) 