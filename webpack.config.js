/*
* @Author: Iris Hu
* @Date:   2017-02-14 14:29:19
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-02-14 16:55:54
*/

var path = require('path');

module.exports = {
	entry:'./main.js',
	output:{
		path:path.join(__dirname,'/build'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
			// babel解析es6
			{
				test:/\.js$/,
				loaders:'babel-loader',
				query:{
					presets:['es2015']
				}
			},
			// sass，style加载解析
			{
				test:'/\.scss$/',
				loader:'style!css!sass'
			}
		]
	}
}