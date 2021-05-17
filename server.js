const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const dto = require('./utils/dto');

const PORT = '8081';

const { version1Router, version2Router } = require('./routes/index');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', version1Router);
app.use('/api/v2', version2Router);

app.route('*').all((req, res) => {
  dto.invalidRequest(res);
});

const server = http.createServer(app);
// eslint-disable-next-line no-console
server.listen(PORT, () => { console.log(`server listening on ${PORT}`); });
