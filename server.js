import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import { StaticRouter } from 'react-router-dom';
import path from 'path';
import fs from 'fs';

const app = express();

app.use(express.static('./build', { index: false }));

app.get('/*', (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const templateFile = path.resolve('./build/index.html');
  fs.readFile(templateFile, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('An error occurred');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
