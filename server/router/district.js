const express = require('express');
const router = express.Router();

require('../db/cons');
const District = require('../module/districtSchema');


router.post('/district', async (req, res) => {
    const {state_name, district_name } = req.body;

    if( !state_name || !district_name ){
        res.status(422).json({error: "All feilds are required"})
    }
try{
const district = new District({ state_name , district_name });
//console.log(district)

            await district.save();

                res.status(201).json({message:"Added successfully"})              
    } catch (error) {
        console.log ("error")
        
    }
    
})

router.get('/district', async(req,res) => {
    try{
           const states = await District.find(req.params)
           res.json(states)
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router
