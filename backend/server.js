const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('Connected to MongoDB'); })
  .catch(err => { console.error('Failed to connect to MongoDB', err); process.exit(1); });

const DataSchema = new mongoose.Schema({
  name: String,
  value: String
});

const Data = mongoose.model('Data', DataSchema);

app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

app.post('/data', async (req, res) => {
  const { name, value } = req.body;
  const data = new Data({ name, value });
  await data.save();
  res.send('Data saved');
});

app.get('/data', async (req, res) => {
  const data = await Data.find();
  res.json(data);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});