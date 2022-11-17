const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	output: {
		path: path.resolve(__dirname + './dist'),
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
		],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};
