import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  caminho: string = '../../assets/bannerHome.png';
  //função para verificar o caminho e atribuir uma imagem ao banner
  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => {
      if (this.router.url.substring(this.router.url.lastIndexOf('/') + 1) === 'home') {
        this.caminho = '../../assets/bannerHome.png'
      }
      if (this.router.url.substring(this.router.url.lastIndexOf('/') + 1) === 'entrega') {
        console.log()
        this.caminho = '../../assets/Header_Motoboy.svg'
      }
      if (this.router.url.substring(this.router.url.lastIndexOf('/') + 1) === 'estabelecimento') {
        this.caminho = '../../assets/Header_Lojista.svg'
      }
    })
  }
}

