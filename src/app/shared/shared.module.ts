import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';

//declarations é só componentes, imports é só modules
@NgModule({
  declarations: [ErrorDialogComponent, CategoryPipe],
  imports: [CommonModule, AngularMaterialModule],
  exports: [ErrorDialogComponent, CategoryPipe],
})
export class SharedModule {}
