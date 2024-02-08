import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

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
  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    // this.courses=[];
    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list().pipe(
      catchError((erro) => {
        this.onError('Erro ao carregar cursos :(')
        return of([]);
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }
  ngOnInit(): void {
    //  this.courses = this.coursesService.list();
  }
}
