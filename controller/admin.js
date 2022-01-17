const { createStudent, getAllStudents, deleteStudentById, getStudentById, updateStudentById } = require('../model/students')

const adminStudents = {
  getAllStudents: async () => {
    return await getAllStudents();
  },
  deleteStudent: async (req) => {
    await deleteStudentById(req.params.id);
  },
  createStudent: async (obj) => {
    await createStudent(obj);
  },
  getStudentById: async (id) => {
    return await getStudentById(id);
  },
  updateStudentById: async (obj) => {
    await updateStudentById(obj);
  }
}

module.exports = adminStudents;