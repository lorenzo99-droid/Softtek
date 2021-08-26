import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AgendaService } from 'src/app/service/agenda.service';
import { Lista } from 'src/app/models/lista';
@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    formFiltros: FormGroup = new FormGroup({});

    list: Lista[] = [];
    constructor(public agendaService: AgendaService, public bsModalRef: BsModalRef, private fb: FormBuilder)
    {

    }

    ngOnInit() {
        this.criandoForms();
        this.popularForms();

    }
    criandoForms(): void {

        this.formFiltros = this.fb.group({

            nome: ['', Validators.required],

            idade: ['', Validators.required],

            genero: ['', Validators.required],

        });

    }
    popularForms(): void {

        this.formFiltros.controls['nome'].setValue(this.list[0].nome);

        this.formFiltros.controls['idade'].setValue(this.list[0].idade);

        this.formFiltros.controls['genero'].setValue(this.list[0].genero);

    }
    editarInformacoes(): void {
        let obj = {
            nome: this.formFiltros.controls['nome'].value,
            idade: this.formFiltros.controls['idade'].value,
            sexo: this.formFiltros.controls['genero'].value
        }
        this.agendaService.updateContatos(this.list[0].id, obj).subscribe(data => {
            this.agendaService.atualizarGrid.next(true);
            this.bsModalRef.hide();
        })
    }
}

