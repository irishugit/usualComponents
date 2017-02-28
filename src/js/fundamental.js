/*
* @Author: Iris Hu
* @Date:   2017-02-28 09:43:39
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-02-28 15:54:16
*/


// 检测浏览器类型
function checkBrowserType(){
	let ua = navigator.userAgent.toLowerCase();
	let s;

	// alert(ua)

  return s = ua.match(/firefox\/([\d.]+)/) ? 'firefox' :
  					 ua.match(/chrome\/([\d.]+)/) ? 
  					 (ua.match(/edge\/([\d.]+)/) ? 'edge' : 'chrome') :
  					 ua.match(/opera.([\d.]+)/) ? 'opera' :
  					 ua.match(/version\/([\d.]+).*safari/) ? 'safari' :
  					 ua.match(/rv:([\d.]+)\) like gecko/) ? 'ie10lower' :
  					 ua.match(/msie ([\d.]+)/) ? 'ie11' : null;

}


const Browser = checkBrowserType();


// 选择元素
let $ = str => document.querySelectorAll(str);

let getURIParams = str => {
	let result = [];
	let index = str.indexOf('?');

	if (index < 0) return false;

	str = str.slice(index);
	str = str.split('&');

	str.map((d) => {
		d = d.split('=');
		result.push({param:d[0],value:d[1]});
	});

	return result;
}

export { Browser, $, getURIParams };