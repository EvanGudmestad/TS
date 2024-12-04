type User = {
  id: number,
  username:string,
  role: "member" | "contributor" | "admin"
}

type UpdateUser = Partial<User>;



const users : User[] = [
  {id: 1, username: "Alice", role: "member"},
  {id: 2, username: "Bob", role: "contributor"},
  {id: 3, username: "Charlie", role: "admin"},
  {id: 4, username: "Dave", role: "member"},
];


function updateUser(id: number, updates: any){
  //Find the user in the array by id
  //Use Object.assign to update the found user in place
  const user = users.find(user => user.id === id);
  if (user) {
    Object.assign(user, updates);
  }
}

function addNewUser(newUser: Omit<User,"id">) : User{
  //Create a new variable called 'user', add an 'id' property to it
  //and spread in all the properties of teh 'newUser' object.
  //Then push the new user to the 'users' array and return the new user.
  //from the function.
  const user : User = {id: users.length + 1, ...newUser};
  users.push(user);
  return user;
}

addNewUser({username: "Eve", role: "member"});

updateUser(1,{username: "Alice B. Toklas", role: "contributor"});
console.log(users);