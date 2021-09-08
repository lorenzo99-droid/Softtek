import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ListaService } from 'src/app/Service/lista.service';

@Component({
  selector: 'app-filtro', 
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  public atualizarGrid: BehaviorSubject<any> = new BehaviorSubject(false);

  public guardandoDadosFiltrados: BehaviorSubject<any> = new BehaviorSubject(null);
  
  public formFiltros = new FormGroup({});
  
  constructor(private fb: FormBuilder, private listaService: ListaService) { }

  ngOnInit(): void {
    this.criandoForms();
  }

  public criandoForms(): void {
    this.formFiltros = this.fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required]
    })
  }
  
  
  popularArray()
  {
    let obj =
    {
      nome: this.formFiltros.controls['nome'].value,
      preco: this.formFiltros.controls['preco'].value,
      quantidade: this.formFiltros.controls['quantidade'].value
    }
    this.listaService.postProdutos(obj).subscribe((data) => {
      this.listaService.atualizarGrid.next(true);
      this.limpar();
    });
  };
  
  limpar()
  {
    this.formFiltros.reset();
  };
  varValoresForms()
  {
    console.log(this.formFiltros.controls['nome'].value);
    console.log(this.formFiltros.controls['preco'].value);
    console.log(this.formFiltros.controls['quantidade'].value);
  };

  filtrar(){
    this.listaService
    .getProdutosFilter(this.formFiltros.controls['nome'].value,
        this.formFiltros.controls['preco'].value,
        this.formFiltros.controls['quantidade'].value)
    .subscribe((data)=>{
      this.listaService.guardandoDadosFiltrados.next(data);
    })
  }
}