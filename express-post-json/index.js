const express = require('express');
let nextId = 1;
const grades = {};
const app = express();
app.use(express.json());
app.get('/api/grades', function(req, res){
  const gradesArray = [];
  for(const id in grades){
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
})



app.post('/api/grades', function(req, res){

  req.body.id = nextId++;
  res.send(req.body);
  res.status(201).json;
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
