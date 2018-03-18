var person = new Object();
person['firstname'] = 'Tony';



console.log(person);
var firstNameProperty = 'firstname';
console.log(person[firstNameProperty]);

console.log(person.firstname);

person.address = new Object();
person.address.street = '3117 7th St';
person.address.city = 'SM';
person.address.state = 'CA';

console.log(person.address.street);
console.log(person['address']['city']);

console.log(person);

//Object Object

// person var is already declared
var Tony = { firstname: 'Tony', 
            lastname: 'Alicea',
            address: {
                street: '1317 7th',
                city: 'SM',
                state: 'CA'
            }
           };

console.log(Tony);

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony);
greet({firstname: 'Mary', lastname: 'Queen of Scots'});
greet({lastname: 'McGyver'}); //undefined, because var is hoisted in fn execution context

var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"firstname": "Mary", "isAProgrammer":true}');

console.log(jsonValue);

