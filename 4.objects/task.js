function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = new Array;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
  if("marks" in this === true){
    this.marks.push(...marks)
  }

}


Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  let avrge = this.marks.reduce((sum, value, index, marks) => {
    sum += value;
        if (index === marks.length - 1) {
      return sum / marks.length;
    }
    return sum;
  },0);
  return avrge;
}

Student.prototype.exclude = function (reason) {
  delete this.subject
  delete this.marks

  this.excluded = reason;
}
