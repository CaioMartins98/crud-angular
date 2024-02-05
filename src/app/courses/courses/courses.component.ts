import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

// códigos comentados é uma segunda opção de fazer a chamada desses métodos

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];
  // coursesService: CoursesService;
  constructor(private coursesService: CoursesService) {
    // this.courses=[];
    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list();
  }

  ngOnInit(): void {
    //  this.courses = this.coursesService.list();
  }
}