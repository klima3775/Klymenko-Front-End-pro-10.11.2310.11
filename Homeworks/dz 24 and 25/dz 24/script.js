class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(undefined); // початкове заповнення undefined
    this.attendanceCount = 0;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  calculateAge(currentYear) {
    return currentYear - this.birthYear;
  }

  present() {
    if (this.attendanceCount < 25) {
      this.attendance[this.attendanceCount] = true;
      this.attendanceCount++;
    } else {
      console.log("Масив відвідуваності повністю заповнений.");
    }
  }

  absent() {
    if (this.attendanceCount < 25) {
      this.attendance[this.attendanceCount] = false;
      this.attendanceCount++;
    } else {
      console.log("Масив відвідуваності повністю заповнений.");
    }
  }

  calculateAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  calculateAverageAttendance() {
    if (this.attendanceCount === 0) {
      return 0;
    }
    const presentCount = this.attendance.filter(
      (status) => status === true
    ).length;
    return presentCount / this.attendanceCount;
  }

  summary() {
    const averageGrade = this.calculateAverageGrade();
    const averageAttendance = this.calculateAverageAttendance();

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Іван", "Іванов", 2000);
const student2 = new Student("Марія", "Петренко", 1999);
const student3 = new Student("Петро", "Сидоренко", 2001);

student1.addGrade(95);
student1.addGrade(88);
student1.present();
student1.absent();

student2.addGrade(78);
student2.addGrade(92);
student2.present();
student2.present();
student2.absent();

student3.addGrade(85);
student3.addGrade(98);
student3.present();
student3.present();
student3.present();

console.log(`${student1.firstName}: ${student1.summary()}`);
console.log(`${student2.firstName}: ${student2.summary()}`);
console.log(`${student3.firstName}: ${student3.summary()}`);
