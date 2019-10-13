import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, NgbModule, FontAwesomeModule],
  exports: [CommonModule, FormsModule, NgbModule, FontAwesomeModule]
})
export class SharedModule {}
