// dynamic properties
const user = {
  name: 'John',
  age: 36,
};

// console.log(user.name);
// console.log(user['name']);

function getUserValue(field) {
  console.log(user[field]);
  const newObj = {
    [field]: 50,
  };
}

getUserValue('age');
