import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NewAssignmentModule } from './new-assignment/new-assignment.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    NewAssignmentModule,
    NgbModule.forRoot(),
    HighlightModule.forRoot({ theme: 'vs2015'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
