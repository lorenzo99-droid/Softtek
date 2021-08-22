import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Contato, ContatosResponse } from 'src/app/models/contatos-response';
import { AgendaService } from 'src/app/service/agenda.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  [x: string]: any;
  lista: any = [];
  aparecerModal: boolean = false;
  
  public modalRef!: BsModalRef;
  
  constructor(private agendaService: AgendaService,
    private modalService: BsModalService) { }
  ngOnInit(): void 
  {
    this.chamandoAgendaService();
    this.behaviors();
  }

  public openModal(template: TemplateRef<any>)
  {
    this.modalRef = this.modalService.show(template);
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

  }
}
