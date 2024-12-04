var gameScores = [14, 23, 0, 16, 24, 19];
var favoriteThings = ['Red', 'Cats', 'JavaScript'];
var voters = [{
        name: 'Jane Doe',
        age: 34,
        voted: true
    }, {
        name: 'John Doe',
        age: 45,
        voted: false
    }, {
        name: 'Jill Doe',
        age: 25,
        voted: true
    }, {
        name: 'Jack Doe',
        age: 55,
        voted: true
    }, {
        name: 'Jake Doe',
        age: 35,
        voted: false
    }, {
        name: 'Jenny Doe',
        age: 45,
        voted: true
    }];
function getLastItem(arr) {
    return arr[arr.length - 1];
}
console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
