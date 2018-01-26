var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_development');
// var Schema = mongoose.Schema({
// 		task: String
// 	});
var Task = mongoose.model('Task', { task: String });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tasks', function(req, res) {
	Task.find({}, function (err, docs) {
		res.render('tasks/index', {
			title: 'Todos index view',
			docs: docs
		});
	});
});

router.get('/tasks/new', function(req, res) {
	res.render('tasks/new.jade', {
		title: 'New Task'
	});
});

router.post('/tasks', function(req, res) {
	var task = new Task({task:req.body.task});
	task.save(function(err) {
		if (!err) {
			res.redirect('/tasks');
		}
		else {
			res.redirect('/tasks/new');
		}
	});
});

router.get('/tasks/:id/edit', function(req, res) {
	Task.findById(req.params.id, function(err, doc) {
		res.render('tasks/edit', {
			title: 'Edit Task View',
			task: doc
		});
	});
});

router.post('/tasks/:id', function(req, res){
	Task.findById(req.params.id, function (err, doc) {
		doc.task = req.body.task;
		doc.save(function(err) {
			if (!err) {
				res.redirect('/tasks');
			}
			else {
				// error handling
				res.redirect('/tasks');
			}
		});
	});
});

router.get('/tasks/:id/del', function(req, res) {
	Task.findById(req.params.id, function(err, doc) {
		if (!doc) return res.redirect('/tasks');
		doc.remove(function(){
			res.redirect('/tasks');
		});
	});
});

module.exports = router;
