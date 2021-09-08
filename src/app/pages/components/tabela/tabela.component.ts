import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/components-bootstrap/modal/modal.component';
import { ProdutosResponse } from 'src/app/models/produtos-response';
import { ListaService } from 'src/app/Service/lista.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  lista: any = [];
  public modalRef!: BsModalRef;
  constructor(private listaService: ListaService, public modalService: BsModalService) { }
  ngOnInit(): void 
  {
    this.chamandoListaService();
    this.behaviors();
  }
  chamandoListaService(): void
  {
    this.listaService.getProdutos().subscribe((data: ProdutosResponse) =>
    {
      this.lista = data;
    });
  }

  behaviors(): void
  {
    this.listaService.atualizarGrid.subscribe((data) =>
    {
      if(data)
        this.chamandoListaService();
    });
  }
  excluir(id: number): void
  {
    this.listaService.deleteProdutos(id).subscribe((data) =>{
      this.chamandoListaService();
    })
  }

  editar(obj: any): void
  {
    const initialState: any = {list: [obj] }
    this.modalService.show(ModalComponent, {initialState});    
  }

}
