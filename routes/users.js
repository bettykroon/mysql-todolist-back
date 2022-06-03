var express = require('express');
var router = express.Router();
const cors = require('cors');

router.use(cors());

router.get('/', (req, res) => {
  req.app.locals.con.connect(function(err){
    if(err){
      console.log(err);
    }

    let sql = `SHOW TABLES`;

    req.app.locals.con.query(sql, function(err, result){
      if(err){
        console.log(err);
      }

      let lists = [];

      for (let i = 0; i < result.length; i++) {
        console.log(result[i].Tables_in_todolist);
        lists.push(result[i].Tables_in_todolist);
      }

      res.json(lists);
    })
  })
})

router.post('/list', (req, res) => {
  req.app.locals.con.connect(function(err){
    if(err){
      console.log("err", err);
    }

    let data = req.body[0].list;

    let sql = `SELECT * FROM ${data}`;

    req.app.locals.con.query(sql, function(err, result){
      if(err){
        console.log(err);
      }

      let todos = [];

      for (let i = 0; i < result.length; i++) {
        console.log("result", result[i].todo);
        todos.push(result[i].todo);
      }
      
      res.json(todos); 
    })
  })
})

router.post('/', (req, res) => {
  req.app.locals.con.connect(function(err){ 
    if(err){
      console.log("err", err);
    }

    let list = req.body[0].list;
    let data = req.body[1].todo;

    let sql = `INSERT INTO ${list} (todo) VALUES ("${data}")`;
 
    req.app.locals.con.query(sql, function(err, result){
      if(err){
        console.log(err);
      }

      console.log("result", result);
      res.send("hej"); 
    })
  }) 
}); 

router.post('/delete', (req, res) => {
  req.app.locals.con.connect(function(err){
    if(err){
      console.log("err", err);
    }

    let list = req.body[0].list;
    let data = req.body[1].todo;

    let sql = `DELETE FROM ${list} WHERE todo="${data}"`;

    req.app.locals.con.query(sql, function(err, result){
      if(err){
        console.log(err);
      }
      console.log(result); 
    })
  })
})

router.post('/add', (req, res) => {
  console.log(req.body.list);
  req.app.locals.con.connect(function(err){ 
    if(err){
      console.log("err", err);
    }

    let data = req.body.list;

    let sql = `CREATE TABLE ${data} (id int, todo varchar(128))`;
 
    req.app.locals.con.query(sql, function(err, result){
      if(err){
        console.log(err);
      }

      console.log("result", result);
      res.send("hej"); 
    })
  })
})

module.exports = router;
