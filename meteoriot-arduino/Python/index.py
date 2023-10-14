import serial
import requests
import time
from datetime import datetime

ser = serial.Serial('/dev/ttyACM0', 9600)
backend_url = "http://localhost:8080/temperatura"

while True:
    line = ser.readline().decode('UTF-8').strip()
    print(line)

    if "Temperatura" in line:
        try:
            valor_temperatura = float(line.split(" ")[-1])
        except (IndexError, ValueError) as e:
            print("Erro ao extrair valor de temperatura:", str(e))
            continue

        data_atual = datetime.now().isoformat()

        payload = {
            "valorTemperatura": valor_temperatura,
            "tipoTemperatura": "Celsius",  
            "dataTemperatura": data_atual
        }

        try:
            response = requests.post(backend_url, json=payload)
            if response.status_code == 201:
                print("Dados enviados com sucesso para o backend.")
            else:
                print("Erro ao enviar dados para o backend. Código de status:", response.status_code)
        except Exception as e:
            print("Erro ao conectar com o backend:", str(e))

    time.sleep(5) 