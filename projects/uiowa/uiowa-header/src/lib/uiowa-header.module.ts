import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UiowaHeaderComponent } from './uiowa-header/uiowa-header.component';
import { UsernameDropdownComponent } from './username-dropdown/username-dropdown.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [UiowaHeaderComponent, UsernameDropdownComponent],
  exports: [UiowaHeaderComponent],
})
export class UiowaHeaderModule {}
