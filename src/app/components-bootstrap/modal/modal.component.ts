import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ListaService } from 'src/app/Service/lista.service';
import { Lista } from 'src/app/models/lista';
@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    formFiltros: FormGroup = new FormGroup({});
    list: Lista[] = [];
    constructor(public listaService: ListaService, public bsModalRef: BsModalRef, private fb: FormBuilder)
    {

    }

    ngOnInit() {
        this.criandoForms();
        this.popularForms();

    }
    criandoForms(): void {

        this.formFiltros = this.fb.group({

            nome: ['', Validators.required],

            preco: ['', Validators.required],

            quantidade: ['', Validators.required],

        });

    }
    popularForms(): void {

        this.formFiltros.controls['nome'].setValue(this.list[0].nome);

        this.formFiltros.controls['preco'].setValue(this.list[0].preco);

        this.formFiltros.controls['quantidade'].setValue(this.list[0].quantidade);

    }
    editarInformacoes(): void {
        let obj = {
            nome: this.formFiltros.controls['nome'].value,
            preco: this.formFiltros.controls['preco'].value,
            quantidade: this.formFiltros.controls['quantidade'].value
        }
        this.listaService.updateProdutos(this.list[0].id, obj).subscribe(data => {
            this.listaService.atualizarGrid.next(true);
            this.bsModalRef.hide();
        })
    }
}

