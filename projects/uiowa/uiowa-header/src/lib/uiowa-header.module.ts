import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UiowaHeaderComponent } from './uiowa-header/uiowa-header.component';
import { UsernameDropdownComponent } from './username-dropdown/username-dropdown.component';
import { ClickOutsideDirective } from './uiowa-header/click-outside.directive';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [
    UiowaHeaderComponent,
    UsernameDropdownComponent,
    ClickOutsideDirective,
  ],
  exports: [UiowaHeaderComponent],
})
export class UiowaHeaderModule {}
