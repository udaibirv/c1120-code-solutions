const express = require('express');
const app = express();
const path = require('path');


  const paths = path.join(__dirname, 'public');
  const files = express.static('public')
  app.use(files);



app.listen(3000, () => {
  console.log('listening on port 3000');
})
