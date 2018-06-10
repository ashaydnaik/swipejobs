import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {JobDataService} from "./job-data.service";
import { JobMatchComponent } from './job-match/job-match.component';
import {JobMatchService} from "./job-match/job-match.service";


@NgModule({
  declarations: [
    AppComponent,
    JobMatchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(JobDataService)
  ],
  providers: [JobMatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
