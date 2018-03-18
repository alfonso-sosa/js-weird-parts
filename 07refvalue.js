var a =3;
var b;
b=a;
a=2;

console.log(a);
console.log(b);

var c = {greeting: 'hi'};
var d;

d = c;
//points to the same as d
c.greeting = 'hello';
//changes reflected in both
console.log(d);

function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
//All mutated by ref
console.log(c);
console.log(d);

c = { greeting: 'Howdy' };
// new obj
console.log(c);
// old obj
console.log(d);
