import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgendaService } from 'src/app/service/agenda.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class  FiltroComponent implements OnInit {
  
  @Input() public olaMundo: string='';
  @Output() public mandandoDadosPraHome: EventEmitter<boolean> = new EventEmitter();
  booleana: boolean = false;
  formFiltros: FormGroup = new FormGroup({});
  listaGenero = ['Escolher:', 'Masculino', 'Feminino', 'Não-binário'];
  
  constructor(private fb: FormBuilder, private agendaService: AgendaService) { }
  
  
  ngOnInit(): void
  {
    console.log(this.olaMundo);
    this.criandoForms();
  }


  criandoForms(): void
  {
    this.formFiltros = this.fb.group(
      {
        nome: ['', Validators.required],
        idade: ['', Validators.required],
        genero: ['', Validators.required],
      } 
    );

  }
  
  
  popularArray()
  {
    let obj =
    {
      nome: this.formFiltros.controls['nome'].value,
      idade: this.formFiltros.controls['idade'].value,
      genero: this.formFiltros.controls['genero'].value
    }
    this.agendaService.postContatos(obj).subscribe((data) => {
      this.agendaService.atualizarGrid.next(true);
      this.limpar();
    });
  }

  limpar()
  {
    this.formFiltros.reset();
    this.formFiltros.controls['genero'].setValue('');
  }
  varValoresForms()
  {
    console.log(this.formFiltros.controls['nome'].value);
    console.log(this.formFiltros.controls['idade'].value);
    console.log(this.formFiltros.controls['genero'].value);
  }

  mandandoDadosParaHome()
  {
    this.mandandoDadosPraHome.emit(true)
  }
}
