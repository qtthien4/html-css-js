var chalk = require('chalk');

function dog(name){
	this.stomach = [];
	this.name = name;
}

dog.prototype.eat = function(cat) {
	this.stomach.push = cat;
};

dog.prototype.sayHi = function() {
	console.log('say Hi! my name is ' + chalk.blue(this.name));
};
module.exports = dog;