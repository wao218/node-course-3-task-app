require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5e3aa45c0dfd6960cfc11ac2').then((task) => {
  console.log(task);
  return Task.countDocuments({ completed: false });
}).then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
});