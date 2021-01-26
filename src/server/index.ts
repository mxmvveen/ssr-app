
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from '../App';

import html from './html';

import * as ExpressServeStaticCore from 'express-serve-static-core';

type ExpressRequest = ExpressServeStaticCore.Request<ExpressServeStaticCore.ParamsDictionary, any, any, ExpressServeStaticCore.Query, Record<string, any>>;
type ExpressResponse = ExpressServeStaticCore.Response<any, Record<string, any>, number>;

const PORT: number = 3000;
const server: ExpressServeStaticCore.Express = express();

server.use(express.static('dist'));

server.get('/', (request: ExpressRequest, response: ExpressResponse) => {
  const body = renderToString(React.createElement(App));

  response.send(
    html({
      body
    })
  );
})

server.listen(3000, () => console.log('Example app listening on port 3000!'));