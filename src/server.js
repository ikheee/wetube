// const express = require('express');
import express from 'express';
import morgan from 'morgan';

const app = express();

const port = 4000;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  if (req.url === '/protected') {
    return res.send('<h1>Not Allowed</h1>');
    // } else {
    //   res.status(401).send('Unauthorized');
  }
  next();
};

const handleListenging = () =>
  console.log(`Listening on: http://localhost:${port}`);

app.use(morgan('dev'));

app.use(logger, privateMiddleware);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, handleListenging);
