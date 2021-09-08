import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './tabela/tabela.component';
import { FiltroComponent } from './filtro/filtro.component';
import { BootstrapModule } from 'src/app/@base/bootstrap/bootstrap.module';

@NgModule({
  declarations: [
    TabelaComponent,
    FiltroComponent,

  ],
  imports: [
    CommonModule,
    BootstrapModule,
  ],
  exports: [
    TabelaComponent,
    FiltroComponent
  ]
})
export class ComponentsModule { }
