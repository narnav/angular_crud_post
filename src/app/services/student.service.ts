import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  SERVER_URL = 'http://localhost:3000/students';
  SERVER__CARS_URL = 'http://localhost:3000/cars';

  constructor(private myServ: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.myServ.get<Student[]>(this.SERVER_URL);
  }

  addStudent(newStudent: any): Observable<any> {
    return this.myServ.post<any>(this.SERVER_URL, newStudent);
  }
}
