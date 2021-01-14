const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/grades', (req, res) => {
  // const gradesArray = req.body;
  const sql = `
    select *
      from "grades"
  `;
  // const params = [gradesArray];

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err =>{
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
})

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  if (!req.body.name || !req.body.course || !req.body.score) {
    return (res.status(400).json({
      error: 'Missing name, course, or score'
    }));
  }
  if (req.body.score <= 0 || req.body.score > 100) {
    return res.status(400).json({
      error: 'Score must be a number between 1 and 100'
    });
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  const params = [newGrade.name, newGrade.course, newGrade.score];

  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err =>{
      console.error(err);
      return res.status(500).json({
        error: 'An unexpected error occured.'
      });
    })
})

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = req.params.id;
  const sql = `
    update "grades"
      set "name" = $1, "course" = $2, "score" = $3`;
  const params = [req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      res.status(200).json(results.row[0]);
    })

})

app.listen(3000, () => {
  console.log("listening on port 3000");
})
