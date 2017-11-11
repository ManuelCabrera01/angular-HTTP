import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { HttpModuleComponent } from './http-module/http-module.component';
import { JokesComponent } from './jokes/jokes/jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    // HttpModuleComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
