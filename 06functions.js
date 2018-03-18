function greet() {
    console.log('hi');
}

greet.language = 'english';

console.log(greet);
console.log(greet.language);


//anonymousGreet();   

// ^ undefined error, it only hoisted the var, but the fn object has not been assigned so it's undefined. This would work for fn statments, as they are executed when found.

var anonymousGreet = function() {
    console.log('hi');
}

console.log(anonymousGreet);

anonymousGreet();

function log(a) {
    console.log(a);
    a();
}

log(function(){
    console.log('hey');
});