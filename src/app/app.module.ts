import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstimatesModule } from './estimates/estimates.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { EstimatesComponent } from './pages/estimates/estimates.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, EstimatesComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    EstimatesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
