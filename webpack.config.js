/*
* @Author: Iris Hu
* @Date:   2017-02-14 14:29:19
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-02-28 15:27:20
*/

var path = require('path');

module.exports = {
	entry:[
		// 设置ES6-ish 环境
		'babel-polyfill',

		// 应用的脚本
		'./src/main.js'
	],
	// entry:'./src/main.js',

	output:{
		path:path.join(__dirname,'/build'),
		filename:'bundle.js'
	},

	// 添加这个就可以在js中直接import Vue
	resolve: {
    alias: {
        'vue': 'vue/dist/vue.common.js'
    }
  },
	module:{
		loaders:[
			// 使用vue-loader 加载 .vue 结尾的文件
      {
          test: /\.vue$/, 
          loader: 'vue-loader',
          options:{
          	loaders:{
	            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
	            // the "scss" and "sass" values for the lang attribute to the right configs here.
	            // other preprocessors should work out of the box, no loader config like this necessary.
	            scss: 'vue-style-loader!css-loader!sass-loader',
	            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
	            js: 'babel-loader'
          	},
          	babel:{

          		presets:['es2015','stage-0'],
          		plugins:['transform-runtime']
          	}

          }   
      },
			{
          test: /\.html$/,
          loader: 'file?name=[name].[ext]'
      },
			// babel解析es6
			{
				test:/\.js$/,
				loaders:'babel-loader',
				exclude: /(node_modules|bower_components)/,
				query:{
					//es2015是es6的特性，stage-0是es7的特性
					presets:['es2015','stage-0'],
					plugins:['transform-runtime']
				}
			},
			// sass，style加载解析
			{
				test:'/\.s[a|c]ss$/',
				loader:'style!css!sass'
			},
		],
	}
}