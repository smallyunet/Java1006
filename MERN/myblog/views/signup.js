router.get('/', checkNotLogin, function (req, res, next) {
  res.render('signup')
})