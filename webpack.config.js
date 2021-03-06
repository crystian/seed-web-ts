const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'./src/index.ts'
	],
	output: {
		path: path.resolve(__dirname, 'dist/public'),
		filename: 'bundle.js'
	},
	stats: {
		colors: true
	},
	devServer: {
		open: false,
		headers: {
			// 'Access-Control-Allow-Origin': 'localhost:*',
		}
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false
							// name: '[name].[ext]',
							// outputPath: 'img/',
							// publicPath: 'img/'
						}
					}
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules(?!([\/\\])normalize\.css)/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.s([ac])ss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
};
