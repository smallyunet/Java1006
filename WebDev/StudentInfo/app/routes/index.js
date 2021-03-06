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
  res.render('index');
});


/**
 * 新增接口
 */
router.post('/add', function(req, res, next) {
  Table.create(req.body);
  res.send('200');
});

/**
 * 编辑接口
 */
router.post('/:id/edit', function(req, res, next) {
  Table.update({ id: req.params.id }, req.body, function(any) {
    res.send('200');
  })
});

/** 
 * 删除接口
 */
router.get('/:id/del', function(req, res, next) {
  Table.deleteOne({ id: req.params.id }, function(any) {
    res.send('200');
  });
});


/**
 * 接口，返回所有数据，忽略_id和__v
 */
router.get('/getAll', function(req, res, next) {

  // 分页相关
  let pages = parseInt(req.query.pages);
  let limit = parseInt(req.query.limit);

  const search = req.query.search ? req.query.search : '.*';

  if ((typeof pages != 'number') || pages < 1 || search != '.*') {
    pages = 1;
  }
  
  if ((typeof limit != 'number') || limit < 1 || search != '.*') {
    limit = 10;
  }

  // 查表
  Table.find({
      $or: [
        { school: { $regex: search }}
      ]
    }, 
    { _id: 0, __v: 0}, 
    function(err, datas) {
    if (!err) {
      var error = 0;
      var status = 'success';
      var date = (new Date()).getFullYear() + '.' + ((new Date).getMonth() + 1) + '.' + (new Date).getDate();
    }
    res.json({
      error: error,
      status: status,
      date: date,
      results: datas
    });
  }).limit(limit).skip((pages - 1) * limit);
});

/**
 * 得到最新的一条记录
 */
router.get('/getLatest', function(req, res, next) {
  Table.find(function(err, data) {
    res.json(data);
  }).sort({ _id: -1 }).limit(1);
});

/**
 * 根据ID获取记录
 */
router.get('/:id/getOne', function(req, res, next) {
  Table.find({ id: req.params.id }, { _id: 0, __v: 0}, function(err, data) {
    res.json(data);
  });
});

/**
 * 总记录条数
 */
router.get('/getAllCount', function(req, res, next) {
  Table.find().count(function(err, count){
    res.send(200, count);
  });
});

module.exports = router;
