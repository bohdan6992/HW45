const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const nurseStudents = require('../controller/nurse')

router.get('/', async (req, res) => {
  const studentsList = await nurseStudents.getAllStudents();
  res.render('nurse', { studentsList: studentsList });
});

router.get('/:id', async (req, res, next) => {
  const student = await nurseStudents.getStudentById(req.params.id);
  res.render('nurseUpdate', {student: student})
});

router.post('/:id', upload.none(), async (req, res, next) => {
  await nurseStudents.updateStudentById(req.body);
});

module.exports = router;