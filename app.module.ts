// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule {}

// Export AppModule which allows it to be imported it elsewhere and tell Angular to bootstrap that particular module.
// Typically you bootstrap an Angular app by importing that module into a new file, say main.ts
