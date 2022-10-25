import { $ } from "../../bind.js";
import createStudentItem from "./student-item.js";

export default async function renderListStudent(students) {
  const studentEl = $(".students");
  students.forEach((student) => {
    studentEl.appendChild(createStudentItem(student));
  });
}
