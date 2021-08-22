import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltroComponent } from '../pages/filtro/filtro.component';
import { TableComponent } from '../pages/table/table.component';
import { HomeComponent } from './home/home.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AgendaService } from './service/agenda.service';

@NgModule({
  declarations: [
    AppComponent,
    FiltroComponent,
    TableComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports:[ModalModule],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
