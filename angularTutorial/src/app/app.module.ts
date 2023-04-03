import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Public/home.component';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobsComponent } from './Public/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
