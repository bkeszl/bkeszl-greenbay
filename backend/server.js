const express = require("express");
const app =  express();
const bodyParser = require('body-parser');
const cors = require('cors')
const db = require('./models');
const PORT = process.env.PORT || 3000;
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const checkToken = require('./middlewares/checkToken')
const databaseDefaultService = require('./services/databseDefaultsService')
require('dotenv').config();

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json({type:'application/*+json'}));
app.use(checkToken);
app.use('/user', userRoutes);
app.use('/item', itemRoutes);

db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, ()=>{
    console.log(`listening on: http://localhost:${PORT}`)
  });
  databaseDefaultService.createDeafults();
});