const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

//Load env files
dotenv.config({ path: './config/config.env' });

//Route files
const bootcamps = require('./routes/bootcamps');

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV;

const app = express();

//Use middlewares
if (NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

//Mount routes
app.use('/api/v1/bootcamps', bootcamps);

app.listen(
	PORT,
	console.log(`Server is listening in ${NODE_ENV} mode on ${PORT}`)
);

module.exports = app;
