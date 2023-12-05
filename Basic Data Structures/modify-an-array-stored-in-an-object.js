let user = {
  name: 'Simmon',
  age: 28,
  data: {
    username: 'CodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Jay',
      'Rose',
      'Jennie'
    ],
    location: {
      city: 'Jurong West',
      state: 'CA',
      country: 'Singapore'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  user.data.friends.push(friend);
  return user.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
