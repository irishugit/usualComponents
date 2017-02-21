/*
* @Author: Iris Hu
* @Date:   2017-02-14 14:14:20
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-02-17 10:33:56
*/
const _LOADING = 'loading';
const _COMPLETE = 'complete';
const _PROGRESS = 'progress';

class Loading{
	constructor(obj){
		this.type = obj.type;
		this.progress = obj.progress || 0;
		this.state = _LOADING;
		this.el = this.el;
	}

	say(){
		return this.state;
	}

	changeState(){
		this.state = this.state === _LOADING ? _COMPLETE : _LOADING;
	}

	on(type){
		var timer = null;

		return new Promise((resolve,reject) => {

			timer = setInterval(()=>{

				if (!type || type !== _COMPLETE) {
					clearInterval(timer);
					reject({state:'error',reason:'type error'});
				}
				if (this.state === _COMPLETE && type === _COMPLETE) {

					clearInterval(timer);
					// this.hidden();
					resolve(this.state);
				}
			},500);
		});
	
	}

	setProgress(p){
		// if (this.type === _PROGRESS) {
			if ( p <= 100 || p*100 <= 100 ) {
				this.progress = p;
			}
			if (p == 100 || p * 100 == 100) {
				this.state = this.state === _LOADING ? _COMPLETE : _LOADING;
			}
		// }
			
	}

	show(){
		this.el.style.display = 'block';
	}

	hidden(){
		this.el.style.display = 'none';
	}
}

export default Loading;