const express = require('express') 
const router = express.Router()
const test = require ('../middleware/test')


router.get('/',test, (req,res)=>{
    res.send('Hello World')
})

module.exports=router