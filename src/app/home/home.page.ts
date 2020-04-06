import { Component } from '@angular/core';
import { CepService } from '../service/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;

  constructor(private cepService: CepService ) { }

  async consultaCEP() {
    try {
      const result = await this.cepService.getCep(this.cep);
      this.populaDadosCep(result);
    } catch (error) {
    console.log(error);
    }
  }

  // Sem async/await
  // consultaCep(){
  //   if (this.cep != ''){
  //     const result = this.cepService.getEndereco(this.cep);
  //         this.populaDadosCep(dados))
  //     }
  // }

  populaDadosCep(dados) {
      this.logradouro = dados.logradouro;
      this.complemento = dados.complemento;
      this.bairro = dados.bairro;
      this.cidade = dados.localidade;
      this.estado = dados.uf;
  }

  limpaCampos() {
    this.cep = '';
    this.logradouro = '';
    this.complemento = '';
    this.bairro = '';
    this.cidade = '';
    this.estado = '';
  }

}
