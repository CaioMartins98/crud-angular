import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly baseUrl = '/assets/courses.json';

  constructor(private httpClient: HttpClient) {}

  list(){
    const getCourses = this.httpClient.get<Course[]>(this.baseUrl).pipe(
      first(),
      delay(3000),
      tap(courses => console.log(courses))
    );
    return getCourses;
  }
}
