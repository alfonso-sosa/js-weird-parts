function mapForEach(arr, fn){
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}

console.log(arr2);

var multBy3 = mapForEach(arr1, function(item){
    return item * 3;
});

console.log(multBy3);


var gt2 = mapForEach(arr1, function(item){
    return item > 2;
});

console.log(gt2);

var checkPastLimit = function(limiter) {
    return (function(item) {
        return item > limiter;
    }).bind(this)
};

//curry
var arr4 = mapForEach(arr1, checkPastLimit(2));
console.log(arr4);

