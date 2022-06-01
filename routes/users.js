var express = require('express');
var router = express.Router();
const cors = require('cors');

router.use(cors());

/* GET users listing. */
router.get('/', (req, res) => {
  req.app.locals.con.connect(function(err){
    if(err){
      console.log("err", err);
    }

    let sql = `SELECT * FROM todos`;

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
  console.log("hej! <3", req.body.todo);

  req.app.locals.con.connect(function(err){ 
    if(err){
      console.log("err", err);
    }

    let data = req.body.todo;

    let sql = `INSERT INTO todos (todo) VALUES ("${data}")`;
 
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
  console.log(req.body[0].todo);
  req.app.locals.con.connect(function(err){
    if(err){
      console.log("err", err);
    }

    let data = req.body[0].todo;

    let sql = `DELETE FROM todos WHERE todo="${data}"`;

    req.app.locals.con.query(sql, function(err, result){
      if(err){
        console.log(err);
      }
      console.log(result); 
    })
  })
})

module.exports = router;
