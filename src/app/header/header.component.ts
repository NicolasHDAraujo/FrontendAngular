import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  clique: string = 'active';
  clique2: string = '';
  clique3: string = '';
  //função para verificar o caminho e atribuir uma cor ao link clicado
  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => {
      if (this.router.url.substring(this.router.url.lastIndexOf('/') + 1) === 'home') {
        this.clique = 'active';
        this.clique2 = '';
        this.clique3 = '';
      }
      if (this.router.url.substring(this.router.url.lastIndexOf('/') + 1) === 'entrega') {
        console.log()
        this.clique2 = 'active'
        this.clique = ''
        this.clique3 = ''
      }
      if (this.router.url.substring(this.router.url.lastIndexOf('/') + 1) === 'estabelecimento') {
        this.clique3 = 'active'
        this.clique2 = ''
        this.clique = ''
      }
    })
  }
  ngOnInit(): void {
  }

}
