const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const devConfig = {
  mode: 'development',
	devServer: {
		port: 3001,
	  historyApiFallback: {
		  index: '/index.html'
  	}
	},
  output: {
    publicPath: 'http://localhost:3001/'
	},
	plugins: [
		new ModuleFederationPlugin({
		  name: 'marketing',
			filename: 'remoteEntry.js',
			exposes: {
				'./MarketingApp': './src/bootstrap'
			},
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, devConfig)
