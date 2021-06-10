const express = require('express');
const app = express();
const helmet = require('helmet');
const path = require('path');
// const redirectSSL = require("heroku-ssl-redirect")
const compression = require('compression');
const critical = require('critical');

const { renderAppToString } = require('./index');
const oneYear = 31557600000;
app.use(helmet());

// Add middleware
// app.use(redirectSSL())

app.use(compression());

app.use(function (req, res, next) {
  if (req.headers.accept && req.headers.accept.indexOf('text/html') > -1) {
    res.setHeader(
      'Cache-Control',
      'no-cache, max-age=0, must-revalidate, no-store'
    );
  }
  next();
});

if (process.env.ENV === 'development') {
  app.use(
    '/assets',
    express.static(path.join(__dirname, '..', 'public', 'assets'), {
      maxAge: oneYear,
    })
  );
} else {
  app.use(express.static(path.join(__dirname, '..'), { maxAge: oneYear }));
}

const cacheSSR = {};
const cacheBuilding = {};

const generateCriticalPage = (pageURL, devHost) => {
  const stringOutput = `<!DOCTYPE html>${renderAppToString(pageURL, devHost)}`;
  return stringOutput;
};

const requestHandler = (req, res) =>
  res.send(generateCriticalPage(req.url, req.hostname));

app.get('/*', requestHandler);

const server = app.listen(process.env.PORT || 7070, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`serving at ${host} & port : ${port}`);
});
