import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() caminho: string = '../../assets/Arte1_Home.png';

  constructor() {}

  ngOnInit(): void {
  }

}

