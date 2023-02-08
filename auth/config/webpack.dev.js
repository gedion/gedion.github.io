const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const devConfig = {
  mode: 'development',
	devServer: {
		port: 3002,
	  historyApiFallback: {
		  index: '/index.html'
  	},
	},
  output: {
    publicPath: 'http://localhost:3002/'
	},
	plugins: [
		new ModuleFederationPlugin({
		  name: 'auth',
			filename: 'remoteEntry.js',
			exposes: {
				'./AuthApp': './src/bootstrap'
			},
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, devConfig)
