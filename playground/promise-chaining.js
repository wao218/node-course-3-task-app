require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5e395254b25ccd53c4e3d496', { age: 1}).then((user) => {
//   console.log(user);
//   return User.countDocuments({ age: 1});
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age: age });
  const count = await User.countDocuments({ age: age });
  return count;
}

updateAgeAndCount('5e395254b25ccd53c4e3d496', 2).then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
})