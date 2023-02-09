const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: `${domain}/auth/latest/`
	},
	plugins: [
		new ModuleFederationPlugin({
		  name: 'auth',
			filename: 'remoteEntry.js',
			exposes: {
				'./AuthApp': './src/bootstrap'
			},
			shared: ['react', 'react-dom']
		})
	]
}

module.exports = merge(commonConfig, prodConfig)
