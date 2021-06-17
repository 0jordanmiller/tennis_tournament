const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const t_model = require('./tournament_model');

app.use(express.json())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  t_model.getTournaments()
  .then(response =>{
    res.status(200).send(response)
  })
  .catch(error => {
    res.status(500).send(error);
  })
})



app.get("/api", (req,res) => {
    res.json({message: "hello from server!"});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
