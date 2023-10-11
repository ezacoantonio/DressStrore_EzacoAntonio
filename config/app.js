const express  = require('express');
const mongoose = require('mongoose');
const indexRouter = require('../apps/routes/index');

const app = express();

app.use(express.json());
app.use('/', indexRouter);

// Connect to MongoDB without including the collection name in the URL
mongoose.connect('mongodb+srv://appuser:appuser@cluster0.dgrqmgc.mongodb.net/DressStore', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

module.exports = app;