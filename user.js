var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var users = [
    { id: 1, username: "Alice", role: "member" },
    { id: 2, username: "Bob", role: "contributor" },
    { id: 3, username: "Charlie", role: "admin" },
    { id: 4, username: "Dave", role: "member" },
];
function updateUser(id, updates) {
    //Find the user in the array by id
    //Use Object.assign to update the found user in place
    var user = users.find(function (user) { return user.id === id; });
    if (user) {
        Object.assign(user, updates);
    }
}
function addNewUser(newUser) {
    //Create a new variable called 'user', add an 'id' property to it
    //and spread in all the properties of teh 'newUser' object.
    //Then push the new user to the 'users' array and return the new user.
    //from the function.
    var user = __assign({ id: users.length + 1 }, newUser);
    users.push(user);
    return user;
}
addNewUser({ username: "Eve", role: "member" });
updateUser(1, { username: "Alice B. Toklas", role: "contributor" });
console.log(users);
