import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import path from 'path';
//config
const port = 3000
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
// import productsRoute from './routes/products.js';
// app.use('/webshop', productsRoute);

// import loginRoute from './routes/login.js';
// app.use('/webshop', loginRoute);

import loginRoute from './routes/hello.js';
app.use('/api', loginRoute);


server.listen(port, () => {
  console.log(`E-commecre app listening on port ${port}`)
})