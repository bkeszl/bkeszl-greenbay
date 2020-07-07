const express = require("express");
const app =  express();
const db = require('./models');
const PORT = process.env.PORT || 3000;
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/item', itemRoutes);

db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, ()=>{
    console.log(`listening on: http://localhost:${PORT}`)
  });
});