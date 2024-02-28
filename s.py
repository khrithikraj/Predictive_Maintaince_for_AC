import serial
import json

# Define the serial port and baud rate
ser = serial.Serial('COM17', 9600)  # Replace 'COM3' with your serial port (e.g., '/dev/ttyUSB0' on Linux)

# Create a list to store received JSON data
received_data = []

try:
    # Read data from the serial port
    while True:
        data = ser.readline()
        if data:
            # Decode the received data and strip whitespace
            decoded_data = data.decode('utf-8').strip()
            print(decoded_data)  # Print the received data

            # Try to parse the data as JSON
            try:
                json_data = json.loads(decoded_data)
                received_data.append(json_data) 
                with open("C:\\Users\\HIRITHIK RAJ\\Desktop\\Sem 5\\Software and Programming in IoT\\Web\\website\\src\\Components\\a.json", "w") as file:
                    json.dump(received_data, file, indent=4) # Append the JSON data to the list
            except json.JSONDecodeError as e:
                print(f"Failed to parse JSON: {e}")

except KeyboardInterrupt:
    pass

# Close the serial port when done
ser.close()

# Save the received JSON data to a file


print("Data saved to received_data.json")
