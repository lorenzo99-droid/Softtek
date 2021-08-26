import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/components-bootstrap/modal/modal.component';
import { ContatosResponse } from 'src/app/models/contatos-response';
import { AgendaService } from 'src/app/service/agenda.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  lista: any = [];
  
  constructor(private agendaService: AgendaService, public modalService: BsModalService) { }
  ngOnInit(): void 
  {
    this.chamandoAgendaService();
    this.behaviors();
  }
  chamandoAgendaService(): void
  {
    this.agendaService.getContatos().subscribe((data: ContatosResponse) =>
    {
      this.lista = data;
    });
  }

  behaviors(): void
  {
    this.agendaService.atualizarGrid.subscribe((data) =>
    {
      if(data)
        this.chamandoAgendaService();
    });
  }
  excluir(id: number): void
  {
    this.agendaService.deleteContatos(id).subscribe((data) =>{
      this.chamandoAgendaService();
    })
  }

  editar(id: number): void
  {
    this.modalService.show(ModalComponent);    
  }
  
}
