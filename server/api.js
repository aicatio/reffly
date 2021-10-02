const express = require('express');
const cors = require('cors');
const connectDB = require('./database');

const app = express();
app.use(cors());
connectDB();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes/redirect'));
app.use('/api/', require('./routes/create'));
app.use('/app/', require('./routes/statistic'));

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World!';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Helloooo ${name}!` }));
});

app.listen(3101, () =>
  console.log('Express server is running on localhost:3101')
);
