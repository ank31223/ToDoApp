const route=require('express').Router();
//this route is on the '/api/path'
const db=require('../db');

route.get('/persons/',(req,res)=>{
    //send all the persons as an array on the other hand there we used to send 
    //arrray like{persons} to hbs page doing rendering...
    setTimeout(function(){
        db.getAllPersons() 
    .then((persons)=>
        res.send(persons)
    )
    .catch((err)=>            // confusion
        res.send({error:err}))

    },3000)
    
    
})

route.post('/persons/',(req,res)=>{
    //add new person data(dateails are in body)
    db.addNewPerson(req.body.name,req.body.age,req.body.city)
    .then(()=>{
        res.redirect('/api/persons'); //redirect to get all persons data..
    })
    .catch((err)=> res.send({error:err}));

})

exports=module.exports={
    route
}