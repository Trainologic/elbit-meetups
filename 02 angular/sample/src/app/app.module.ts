import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appRef: ApplicationRef) {
    const originalTick = appRef.tick;

    appRef.tick = function() {
      const before = performance.now();

      originalTick.apply(this, arguments);

      const after = performance.now();

      console.log("tick", (after-before));
    }
  }
}
