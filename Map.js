var words = ["ground", "control", "to", "major", "tom"];

function map(arr, cb) {
    var newArray = [];
    for (i in arr) {
        var result = cb(arr[i])
        newArray.push(result);
    }
    return newArray;
};



var answer1 = map(words, function(word) {
    return word.length;
});

var answer2 = map(words, function(word) {
    return word.toUpperCase();
});

var answer3 = map(words, function(word) {
    return word.split('').reverse().join('');
});

console.log(answer1);
console.log(answer2);
console.log(answer3);