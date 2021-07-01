const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    d_o_b: {
        type: String,
        required: true
    },
    fathers_name : {
        type: String,
        required: true
    },
    mothers_name : {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    }
})



const Child = mongoose.model('CHILD', childSchema);

module.exports = Child;