require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5e3aa45c0dfd6960cfc11ac2').then((task) => {
//   console.log(task);
//   return Task.countDocuments({ completed: false });
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// });


const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
}

deleteTaskAndCount('5e3953d4fb8df761c06e5af3').then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
});