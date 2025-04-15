const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const appRoutes = require('./routes/appRoutes');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api', appRoutes);


// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;