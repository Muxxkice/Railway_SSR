const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// entry: './server/index.js',
	entry: './src/index.tsx',
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: [
					{
						loader: 'babel-loader',
					}
				],
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
