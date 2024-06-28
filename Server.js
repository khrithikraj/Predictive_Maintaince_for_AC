const express = require('express');
const fs = require('fs');
const app = express();
const port = 3030; 
app.use(express.json());

app.get('/data', (req, res) => {
  try {
    const rawData = fs.readFileSync("C:\\Users\\HIRITHIK RAJ\\Desktop\\Sem 5\\Software and Programming in IoT\\Web\\a.json", 'utf-8');
    const data = JSON.parse(rawData);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve data data)' });
  }
});

app.get('/getData', (req, res) => {
    try {
      const rawData = fs.readFileSync('path/to/your/JSON/file.json', 'utf-8');
      const data = JSON.parse(rawData);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve data getdata' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
