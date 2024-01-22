const express=require("express")
const router=express.Router()
const { CreateUser,GetUser,UpdateUser,DeleteUser}=require("../Controles/UserControles")

router.post('/create', CreateUser)

router.get('/get',GetUser)

router.put('/put/:a',UpdateUser)

router.delete('/delete/:a',DeleteUser)
module.exports=router
