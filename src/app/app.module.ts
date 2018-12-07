import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';

import { CoreModule } from './core/core.module';
import { BasicUsageModule } from './basic-usage/basic-usage.module';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    BasicUsageModule,
    NgbModule.forRoot(),
    HighlightModule.forRoot({ theme: 'vs2015'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
