import serial

ser = serial.Serial('/dev/ttyACM0', 9600);

with open('temperatura.txt', 'w') as file:
    while True:
        line = ser.readline().decode('UTF-8').strip()
        print(line)
        file.write(line + '\n')