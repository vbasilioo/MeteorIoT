#include <DHT.h>

#define DHTPIN A0       // O pino de dados do sensor DHT está conectado ao pino analógico A0
#define DHTTYPE DHT22   // Use DHT22 para o modelo DHT22 (ou DHT11 para o modelo DHT11)

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();  // Inicializa o sensor DHT
}

void loop() {
  // Leitura da temperatura e umidade
  float temperatura = dht.readTemperature();
  float umidade = dht.readHumidity();

  Serial.print("Temperatura: ");
  Serial.println(temperatura);

  Serial.print("Umidade: ");
  Serial.println(umidade);

  delay(15000);
}
