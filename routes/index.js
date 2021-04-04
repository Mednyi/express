var express = require('express');
var router = express.Router();

let dataArr = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', (req, res, next) => {
  res.send(dataArr);
});

router.get('/data/:id', (req, res, next) => {
  res.status(200).send(dataArr.find(item => item.id === req.params.id));
});

router.post('/data', (req, res, next) => {
  const newData = req.body;
  dataArr.push(newData);
  res.send(dataArr);
});

router.put('/data/:id', (req, res, next) => {
  const update = req.body;
  let index = dataArr.findIndex(item => item.id === req.params.id);
  dataArr[index] = {...dataArr[index], ...update};
  res.send(dataArr);
});

router.delete('/data/:id', (req, res, next) => {
  dataArr = dataArr.filter(item => item.id !== req.params.id);
  res.send(dataArr);
});

module.exports = router;
