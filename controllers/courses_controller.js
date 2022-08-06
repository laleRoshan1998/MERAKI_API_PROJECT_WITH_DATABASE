const knex = require('../config/db')


const getAll_data = (req,res) => {
    knex('*').from('meraki_crud').then((data)=>{
        if(data.length == 0) {
            console.log('data is available');
            res.send({
                "status": 'error',
                "massage": "course not available"
            })
        }else{
            res.send({
                "status": "success",
                "count": data.length,
                "data": data
            })  
        }
    }).catch ((error)=> {
        console.log(error);
        res.send(error.message)
    })
}


const CourseByID = (req,res) =>{
    knex('meraki_crud').where({id:req.params.id}).then((data)=>{
        if(data.length == 0) {
            res.send({
                "status": "error",
                "message": "Invalid ID"
            })
        }else{
            res.send({
                "status": "success",
                "data": data
            })
        }
    }).catch ((error)=>{
        console.log(error);
        res.send(error)
    })
}


const deleteCourse = async (req, res) => {
    const para_id = req.params.id
    const data = await knex('meraki_crud').where({ id: para_id }).del()
    console.log(data);
    if(data>0){
        res.send({
            "status":"success",
            "message":"data deleted successfully..."})
    }else{
        res.send({
            "status":"error",
            "message":"invalid ID ........"})
    }
}


updateDataById = async(req,res)=>{
    // console.log(req.body)
    knex("meraki_crud").where('id',req.params.id)
    .update(req.body).then((data)=>{
        if (data == 0){
            res.send({
                "status":"error",
                "message": "Invalid ID"
            })
        }else{
            res.send({
                "status":"update success",
                "data": req.body
            })
        }
    }).catch((err)=>{
        res.send({"status":err})
    })
}


const addcourse = async (req,res)=>{
    const info = req.body
    if(Object.keys(info).length == 0){
        res.send({
            "status": "error",
            "message": "empty course"
        })
    }
    else{
        await knex("meraki_crud").insert(info)
        res.send({
            "status": "successfully",
            "data": info
        })
        console.log("course added succefully.....");
    }
}







module.exports = {getAll_data,CourseByID,deleteCourse,updateDataById,addcourse}