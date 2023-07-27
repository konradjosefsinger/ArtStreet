const express = require('express');
//const router = require('./router.js');
const cors = require('cors');

const app = express();

const PORT = 5050;

app.use(cors());
app.use(express.json());

//app.use(router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
