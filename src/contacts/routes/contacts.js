var express = require('express');
var router = express.Router();
var i=-1;
var data=[];
//var mess=[][];
/* GET contacts */
router.get('/:id', function(req, res, next) {
	res.json(data[req.params.id]);
});

router.post('/', function(req, res, next) {
  console.log(req.body);
	//res.status(200);
	i=i+1;
	data[i]=req.body;
  res.json(i);
  res.send();

});

router.put('/:id', function(req, res, next) {

  data[req.params.id].firstName=req.body.firstName;
  return res.json(data[req.params.id]);
    console.log(req.body);

});
router.put('/:id/:mess',function(req,res,next){
	data[req.params.id].mess=req.params.mess;
	return res.json(data[req.params.id]);
});

module.exports = router;
