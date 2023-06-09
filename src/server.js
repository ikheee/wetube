// const express = require('express');
import express from 'express';

const app = express();

const port = 4000;

const handleListenging = () =>
  console.log(`Listening on: http://localhost:${port}`);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, handleListenging);
