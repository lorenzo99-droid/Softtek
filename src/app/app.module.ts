import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaService } from './Service/lista.service';
import { PagesModule } from './pages/pages.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './components-bootstrap/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PagesModule,
    ModalModule.forRoot()
  ],
  exports:[ ModalModule],
  providers: [ListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
