var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'public/javascripts/reactjs/index.js'),
	output: {
		path: path.resolve(__dirname, 'public/javascripts'),
		filename: 'index.js'
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192',
			options: {
				name: '[name].[ext]?[hash]'
			}
		},
		{
	      test: /\.css$/, 
	      loader: 'style-loader!css-loader'
	    }
		]
	}
};
