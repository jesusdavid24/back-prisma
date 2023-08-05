const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const prismaRouter = require('../src/routers/prisma')

const app = express()
const port = 3001

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use("/prisma", prismaRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
