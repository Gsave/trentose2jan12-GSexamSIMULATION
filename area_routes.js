const express = require('express');
const area = require('./area');

const areaRoutes = express.Router(); 

areaRoutes.route('/')
.get(function (req, res) {
    var sides = [req.query.side1,req.query.side2]
    var result = area.gerArea(sides)
    if(result == -1){
        res.status(400)
        res.json({result:result})
    }else{
        res.status(200)
        res.json({result:result})
    } 
})

module.exports = areaRoutes;