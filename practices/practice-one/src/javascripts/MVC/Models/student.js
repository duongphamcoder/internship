import { axiosClient } from "../../bind.js";

export default class Student {
  constructor(
    code = "",
    image = "",
    name = "",
    dateOfBirth = "",
    gender = "",
    classCode = "",
    specialized = "",
    isDelete = false
  ) {
    this.code = code;
    this.image = image;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.classCode = classCode;
    this.specialized = specialized;
  }

  async getStudents() {
    const datas = await axiosClient.get("http://localhost:3000/student");
    return datas;
  }

  async getStudent(code) {
    const datas = await axiosClient.get("http://localhost:3000/student");
    const students = datas.filter((student) => {
      console.log(student.code.search(code));
      return student.code.search(code) !== -1;
    });
    return students;
  }
}
