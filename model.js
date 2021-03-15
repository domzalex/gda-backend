const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
  name: {
    type: String
  },
  date: {
    type: String
  },
  location: {
    type: String
  },
  postDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Events', eventsSchema);