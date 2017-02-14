/*
* @Author: Iris Hu
* @Date:   2017-02-14 14:14:20
* @Last Modified by:   Iris Hu
* @Last Modified time: 2017-02-14 16:16:23
*/

class Loading{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	say(){
		return 'i\'m ${this.name},age ${this.age}';
	}
}

export default Loading;