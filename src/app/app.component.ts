import { Component } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  students: Student[] = [];
  n1: number = 8;
  constructor(private ser: StudentService) {
    ser.getStudents().subscribe((res) => (this.students = res));
  }
  addNewStudent() {
    this.ser
      .addStudent({ sName: 'test', sAge: 5 })
      .subscribe((res) => console.log(res));
  }
}
