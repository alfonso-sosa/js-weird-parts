var arr = [1,2,3];
console.log(arr);

var arr2 = [
    1,
    false,
    {
        name: 'Tony',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "hello"
];

console.log(arr2);
arr2[3](arr2[2].name);