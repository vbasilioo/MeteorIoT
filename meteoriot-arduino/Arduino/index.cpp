#include <TMP36.h>

TMP36 myTMP36(A0, 5.0);

void setup(){
    Serial.begin(9600);
}

void loop(){
    float temperatura = myTMP36.getTempC();
    Serial.print("Celsius: ");
    Serial.println(temperatura);
    delay(1000);
}