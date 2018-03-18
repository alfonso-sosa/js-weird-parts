function greet(name) {
    var name = name || '-';
    console.log(`Hello ${name}`);
}

greet('Tony');
greet(0); // Note 0 will be treated as false and thus print '-'
greet();