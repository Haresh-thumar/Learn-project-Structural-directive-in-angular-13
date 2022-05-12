import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by-ng-for',
  templateUrl: './track-by-ng-for.component.html',
  styleUrls: ['./track-by-ng-for.component.scss']
})
export class TrackByNgForComponent implements OnInit {

  students: any[];

  constructor() {
    this.students=[
      {
        studentId: 1,
        name: 'Chandan',
        gender: 'male',
        age: 22,
        course: 'BCA'
      },
      {
        studentId: 2,
        name: 'Rahul',
        gender: 'male',
        age: 23,
        course: 'MCA'
      },
      {
        studentId: 3,
        name: 'Rutvik',
        gender: 'male',
        age: 24,
        course: 'BSC.IT'
      },
      {
        studentId: 4,
        name: 'Parth',
        gender: 'male',
        age: 25,
        course: 'PGDCA'
      },
    ];
  }

  ngOnInit(): void {
  }


  getMoreStudents():void {
    this.students=[
      {
        studentId: 1,
        name: 'Chandan',
        gender: 'male',
        age: 22,
        course: 'BCA'
      },
      {
        studentId: 2,
        name: 'Rahul',
        gender: 'male',
        age: 23,
        course: 'MCA'
      },
      {
        studentId: 3,
        name: 'Rutvik',
        gender: 'male',
        age: 24,
        course: 'BSC.IT'
      },
      {
        studentId: 4,
        name: 'Parth',
        gender: 'male',
        age: 25,
        course: 'PGDCA'
      },
      {
        studentId: 5,
        name: 'Haresh',
        gender: 'male',
        age: 26,
        course: 'DIPLOMA'
      },
      {
        studentId: 1,
        name: 'Chandan',
        gender: 'male',
        age: 22,
        course: 'BCA'
      },
      {
        studentId: 2,
        name: 'Rahul',
        gender: 'male',
        age: 23,
        course: 'MCA'
      },
      {
        studentId: 3,
        name: 'Rutvik',
        gender: 'male',
        age: 24,
        course: 'BSC.IT'
      },
    ];
  }

  trackByStudentid(index:number, student:any): string{
    return student.studentId;
  }

}
