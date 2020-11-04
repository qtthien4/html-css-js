function Mouse(color){
	this.color = color;
	this die = false; 
}
Mouse.prototype.die = function(){
	this.dead =  true;
}

module.exports = Mouse