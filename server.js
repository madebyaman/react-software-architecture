import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();

app.get('/*', (req, res) => {
  const html = renderToString(<h1>Hello World</h1>);
  return res.send(`<html><body><div id="root">${html}</div></body></html>`);
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
