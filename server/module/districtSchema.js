const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
    state_name: {
        type: String,
        required: true
    },
    district_name: {
        type: String,
        required: true
    }
})



const District = mongoose.model('DISTRICT', districtSchema);

module.exports = District;