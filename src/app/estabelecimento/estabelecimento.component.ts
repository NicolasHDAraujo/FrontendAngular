import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null],
      sobrenome: [null],
      email: [null],
      senha: [null],
      cpf: [null],
      rg: [null],
      cnpj: [null],
      nomeResponsavel: [null],
      estado: [null],
      cidade: [null],
      emailEstabelecimento: [null],
      telefone: [null],
      ramoAtuacao: [null],
      possuiMotoboy: [null],
      atuaComDelivery: [null],
      flexCheckChecked: [null]
    })
  }

  public submit(): void {
    alert('Sucesso!')

    this.formulario.reset();
  }
}
