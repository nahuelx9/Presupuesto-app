import { EgresoService } from './egreso/egreso.service';
import { IngresoService } from './ingreso/ingreso.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    IngresoComponent,
    EgresoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoService,EgresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
