import React, { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';

import Head from './head';

import { StaticRouter } from 'react-router-dom';

import getClientBundleEntryAssets from './asset-reader';
import AppRouter from './router';

const HTML = ({ url, devHost }) => {
  const { path: sitePath, assetsByChunkName } = getClientBundleEntryAssets();

  return (
    <html lang="en">
      <Head />
      {process.env.ENV === 'development' ? (
        <Fragment>
          <link
            rel="stylesheet"
            type="text/css"
            href={`http://${devHost}:9000/assets/css/styles.css`}
          />
          <link
            rel="stylesheet"
            type="text/css"
            href={`http://${devHost}:9000/assets/css/header.css`}
          />
        </Fragment>
      ) : (
        <link
          rel="stylesheet"
          type="text/css"
          href={path.join(sitePath, assetsByChunkName.style[0])}
        />
      )}
      <body className="body-class index_1 home1">
        <div id="body-wrap">
          <StaticRouter location={url} context={{}}>
            <AppRouter />
          </StaticRouter>
        </div>
      </body>
      {process.env.ENV === 'development' ? (
        <script
          type="text/javascript"
          src={`http://${devHost}:9000/client.dev.js`}
        />
      ) : (
        <Fragment>
          <script
            type="text/javascript"
            src={path.join(sitePath, assetsByChunkName.vendor)}
          />
          <script
            type="text/javascript"
            src={path.join(sitePath, assetsByChunkName.client)}
          />
        </Fragment>
      )}
    </html>
  );
};

export const renderAppToString = (url, devHost) =>
  ReactDOMServer.renderToString(<HTML url={url} devHost={devHost} />);
