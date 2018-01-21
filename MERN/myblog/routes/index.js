
module.exports = function (app) {
	app.get('/', function (req, res) {
		res.redirect('/posts')
	})
	app.use('/singup', require('./signup'))
	app.use('/singin', require('./signin'))
	app.use('/singout', require('./signout'))
	app.use('/posts', require('./posts'))
	app.use('/comments', require('./comments'))
}