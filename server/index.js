const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 2615;

//middleware
app.use(cors());
app.use(express.static(`${__dirname}/../public/`));
app.use(express.static(`${__dirname}/../public/css`));

app.listen(PORT, () => {
  console.log(`FEC App listening on port ${PORT}`);
});