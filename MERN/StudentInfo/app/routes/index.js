var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// 连接MongoDB
mongoose.connect('mongodb://localhost/StudentInfo', function(err) {
  if (err) throw err;
});

// 表原型
var Schema = mongoose.Schema ({
  id: Number,        
  school: String,     
  class: Number,     
  name: String,       
  gender: String,     
  age: Number,       
  tel: Number,       
  birthplace: String  
});

// 新建表模型
var Table = mongoose.model('Table', Schema);

/**
 * 首页路由，渲染了index视图
 */
router.get('/', function(req, res, next) {
  Table.find(function(err, students) {
    res.render('index', { title: 'Students Info Manager System' });
  });
});

/**
 * 接口，返回所有数据，忽略_id和__v
 */
router.get('/getAll', function(req, res, next) {
  Table.find({}, { _id: 0, __v: 0}, function(err, students) {
    if (!err) {
      var error = 0;
      var status = 'success';
      var date = (new Date()).getFullYear() + '.' + ((new Date).getMonth() + 1) + '.' + (new Date).getDate();
    }
    res.json({
      error: error,
      status: status,
      date: date,
      results: students
    });
  });
});

module.exports = router;
