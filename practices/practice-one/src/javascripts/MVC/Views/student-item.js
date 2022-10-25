export default function createStudentItem(student) {
  const li = document.createElement("li");
  li.classList.add("student-item");
  li.setAttribute("id", student.code);
  li.innerHTML = `
    <div class="student-item-image">
      <img
        src="${student.image}"
        alt="${student.name}"
      />
    </div>
    <div class="student-item-infor">
      <ul class="student-item-infor-group">
        <li class="student-infor-group-item">
          <p>Mã sinh viên: ${student.code}</p>
        </li>
        <li class="student-infor-group-item">Giới tính: ${student.gender}</li>
        <li class="student-infor-group-item">Mã lớp: ${student.classCode}</li>
      </ul>
      <ul class="student-item-infor-group">
        <li class="student-infor-group-item">
          <p>Họ và tên: ${student.name}</p>
        </li>
        <li class="student-infor-group-item">Ngày sinh: ${student.dateOfBirth}</li>
        <li class="student-infor-group-item">
          Tên chuyên ngành: ${student.specialized}
        </li>
      </ul>
    </div>`;
  return li;
}
