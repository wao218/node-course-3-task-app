const mongoose = require('mongoose');

const Tasks = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  }, 
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = Tasks;