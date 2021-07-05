import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null],
      sobrenome: [null],
      email: [null],
      senha: [null],
      confirmaSenha: [null],
      celular: [null],
      rg: [null],
      cpf: [null],
      cnpj: [null],
      cidadeAtuacao: [null],
      banco: [null],
      tipoConta: [null],
      agencia: [null],
      conta: [null],
      nomeConta: [null],
      cpfConta: [null],
      tipoVeiculo: [null],
      corVeiculo: [null],
      placaVeiculo: [null],
      fotoHabilitacao: [null],
      fotoDocVeiculo: [null],
      fotoCnh: [null],
      flexCheckChecked: [null]
    })
  }

  public submit(): void {
    alert('Sucesso!')

    this.formulario.reset();
  }
}
