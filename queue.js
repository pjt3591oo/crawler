function queue (init) {

	this.data = [];
  this.count=init | 0;
};

queue.prototype.ipush = function(Data){ //push

		this.data[this.count]=Data;
		this.count++;

};

queue.prototype.push = function(url){ //push

  if(!url){return }
	var chUrl = (url.split('http://').length>1) || (url.split('https://').length>1) ;


	if(chUrl){
		this.data[this.count]=String(url);
		this.count++;
	}
};

queue.prototype.getSize = function(){ //크기
	return this.count
};

queue.prototype.print = function(){ //출력
  console.log(this.data);
}

queue.prototype.pop = function(){ //꺼내기
	var receive = this.data[0];
	this.Lshift();
	return String(receive);
};

queue.prototype.empty = function(){ //비었니 0 : 1
	return (this.data.length)? false: true ;
}

queue.prototype.Lshift = function(){
	for (var i = 0 ; i< this.getSize()-1 ;i++ )this.data[i] = this.data[i+1]

	//this.data[this.getSize()-1] = 0;

}

module.exports = queue;
