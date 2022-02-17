import express from 'express';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import { StaticRouter } from 'react-router-dom';
import path from 'path';
import fs from 'fs';
import { InitialDataContext } from './src/initialDataContext';
import 'isomorphic-fetch';

global.window = {};

const app = express();

app.use(express.static('./build', { index: false }));

// Placeholder article data
const articles = [
  { title: 'Article 1', author: 'Bob' },
  { title: 'Article 2', author: 'Ed' },
  { title: 'Article 3', author: 'Sam' },
  { title: 'Article 4', author: 'Tom' },
];

app.get('/api/articles', (req, res) => {
  const loadedArticles = articles;
  res.json(loadedArticles);
});

app.get('/*', async (req, res) => {
  const styles = new ServerStyleSheet();

  const contextObj = {
    _isServerSide: true,
    _requests: [],
    _data: {},
  };

  renderToString(
    styles.collectStyles(
      <InitialDataContext.Provider value={contextObj}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </InitialDataContext.Provider>
    )
  );

  await Promise.all(contextObj._requests);
  contextObj._isServerSide = false;
  delete contextObj._requests;

  const html = renderToString(
    <InitialDataContext.Provider value={contextObj}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </InitialDataContext.Provider>
  );

  const templateFile = path.resolve('./build/index.html');
  fs.readFile(templateFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('An error occurred');
    }

    return res.send(
      data
        .replace(
          '<div id="root"></div>',
          `<script>window.preloadedData = ${JSON.stringify(
            contextObj
          )}};</script><div id="root">${html}</div>`
        )
        .replace('{{styles}}', styles.getStyleTags())
    );
  });
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
