const express = require("express");
const router = express.Router();
const {getAll_data,CourseByID,deleteCourse,updateDataById,addcourse} = require('../controllers/courses_controller.js')


router.get('/all_courses', getAll_data)

router.post('/find_courseBy/:id', CourseByID)

router.delete('/deleteBy/:id', deleteCourse)

router.put("/updateDataById/:id",updateDataById)

router.get("/add_course", addcourse)







module.exports = router