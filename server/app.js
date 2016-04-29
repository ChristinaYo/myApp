'use strict';

const express = require('express');
const app = express();

app.get('/auth', (req, rsp) => {
   const data = { cardTitle: 'hello Node' };
  //const data = rsp.
  rsp.json(data);
});

app.listen(9018, () => {
  console.log('listen to 9018');
});
