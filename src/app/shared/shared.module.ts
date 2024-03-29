import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  NgbModalModule,
  NgbNavModule,
  NgbTimepickerModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    NgbTypeaheadModule,
    NgbNavModule,
    NgbTimepickerModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    NgbTypeaheadModule,
    NgbNavModule,
    NgbTimepickerModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
