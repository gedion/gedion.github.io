const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const devConfig = {
  mode: 'development',
	devServer: {
		port: 3003,
	  historyApiFallback: {
		  index: '/index.html'
  	},
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
  output: {
    publicPath: 'http://localhost:3003/'
	},
	plugins: [
		new ModuleFederationPlugin({
		  name: 'dashboard',
			filename: 'remoteEntry.js',
			exposes: {
				'./DashoardApp': './src/bootstrap'
			},
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, devConfig)
