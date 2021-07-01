const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})



const State = mongoose.model('STATE', stateSchema);

module.exports = State;