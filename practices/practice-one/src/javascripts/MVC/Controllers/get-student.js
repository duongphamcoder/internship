import { axiosClient } from "../../bind.js";
import Student from "../Models/student.js";
import renderListStudent from "../Views/list-student.js";

export default class GetStudent {
  constructor() {
    this.student = new Student();
  }

  async render() {
    const students = await this.student.getStudents();
    renderListStudent(students);
  }

  async getStudent(code) {}
}
