const { getAllStudents, getStudentById, updateStudentById } = require('../model/students')

const nurseStudents = {
  getAllStudents: async () => {
    return await getAllStudents();
  },
  getStudentById: async (id) => {
    return await getStudentById(id);
  },
  updateStudentById: async (obj) => {
    await updateStudentById(obj);
  }
}

module.exports = nurseStudents;