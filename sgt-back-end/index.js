const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;

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
  const gradeId = parseInt(req.params.gradeId, 10);

  if(!Number.isInteger(gradeId) || gradeId <= 0){
    return res.status(400).json({
      error: 'The gradeId must be a positive integer'
    });
  }
  if(!req.body.name || !req.body.score || !req.body.score){
    return res.status(400).json({
      error: 'Inputted name, score, or course is invalid'
    });
  }
  const sql = `
    update "grades"
      set "name" = $1, "course" = $2, "score" = $3
      where "gradeId" = $4`;
  const params = [req.body.name, req.body.course, req.body.score, req.params.gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if(!grade){
        res.status(404).json({
          error: 'grade targerted does not exist in the database'
        });
      } else{
      res.status(200).json(grade);
      }
    })
    .catch(err =>{
      console.error(err);
      return res.status(500).json({
        error: 'An unexpected error occured while querying the database'
      })
    })

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if(!Number.isInteger(gradeId) || gradeId <= 0){
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }

  const sql = `
  delete from "grades"
    where "gradeId" = $1
    returning *
  `;
  const params = [req.params.gradeId];
  db.query(sql, params)
  .then(result => {
    const grade = result.rows[0];
    if(!grade){
    return res.status(404).json({
        error: `Cannot find grade with "gradeId" ${gradeId}`
      });
    }else{
      res.sendStatus(204);
    }
  })
  .catch(err => {
    console.error(err);
    return res.status(500).json({
      error: 'An unexpected error occured'
    });
  })

});

app.listen(3000, () => {
  console.log("listening on port 3000");
})
