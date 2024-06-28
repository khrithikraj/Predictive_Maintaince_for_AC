#include <DHT.h>
#include <ArduinoJson.h>

#define DHT_TYPE DHT11
#define DHT_PIN 2

int measurePin = 9;
int samplingTime = 280;
int deltaTime = 40;
int sleepTime = 9680;
float voMeasured = 0;
float calcVoltage = 0;
float dustDensity = 0;

DHT dht(DHT_PIN, DHT_TYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  delay(12000);
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  delayMicroseconds(samplingTime);
  voMeasured = analogRead(measurePin);
  delayMicroseconds(deltaTime);
  delayMicroseconds(sleepTime);
  calcVoltage = voMeasured * (5.0 / 1024.0);
  dustDensity = 190 * calcVoltage - 0.1;

  DynamicJsonDocument jsonDoc(128); 
  jsonDoc["temperature"] = temperature;
  jsonDoc["humidity"] = humidity;
  jsonDoc["calcVoltage"] = calcVoltage;
  jsonDoc["dustDensity"] = dustDensity;

  String jsonString;
  serializeJson(jsonDoc, jsonString);

  Serial.println(jsonString);
}
