function greet(firstname, lastname, language = 'en', ...other){
    
    if (arguments.length === 0) {
        console.log('missing params');
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('args 0 : ' + arguments[0]);
    console.log(other);
    console.log('==========');
}

greet();
greet('John');
greet('John', 'Smith');
greet('John', 'Smith', 'es');
greet('John', 'Smith', 'es', '3102020', '1315 SM, CA');
