// prototypal
// all objects (including functions!) have a prototype __proto__ property, this is searched for props after the object itself.
// protos can be nested indefintely -> this is called the prototype chain
// note that the __proto__ does not need to be dereferenced, props are searched for automatically
// objects can share the same prototype


var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}


// don't do this ever, slows everything down!

john.__proto__ = person;

console.log(john.getFullName());


var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());


// proto object
var a = {};

// proto fn
var b = function() {};

// primitive
var c = [];


for (var prop in john){
    if (john.hasOwnProperty(prop)){
        console.log('- ' + prop + ': ' + john[prop]);
    }
    else {
        console.log(prop);
    }
}

jane = {
    address: '111 Main St',
    getFormalFullName: function(){
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: (function() {
        console.log(this);
        return this.firstname;
    }).bind(this)
}

_.extend(john, jane, jim);

console.log(john)