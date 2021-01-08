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
  const newGrade = req.body;
  const id = nextId++;
  newGrade.id = id;
  grades[id] = newGrade;
  res.status(201).json(newGrade);
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
