import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtendSharedComponent } from './extend-shared/extend-shared.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.withExtendComponent(ExtendSharedComponent),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
