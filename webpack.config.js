var webpack = require('webpack');
var path = require('path');

var DIST_PATH = path.resolve(__dirname,"dist");
var SRC_PATH = path.resolve(__dirname,"src");


var config = {
		entry : SRC_PATH + "/app/index.js",
		output : {
			path : DIST_PATH + "/app",
			filename : "bundle.js",
			publicPath : "/app/"
		},
		module : {
			loaders:[
				{
					test : /\.js?/,
					include : SRC_PATH,
					loader : "babel-loader",
					query : {
						presets : ["react","es2015","stage-2"]
					}
				}
			]
		}
}

module.exports = config;