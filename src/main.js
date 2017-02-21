/*
* @Author: Iris Hu
* @Date:   2017-02-14 14:21:15
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-02-21 18:42:32
*/

import Vue from 'vue';

import App from './app.vue';

new Vue({
	el:'#app-container',
	render(createElement) {
		return createElement(App)
	}
})