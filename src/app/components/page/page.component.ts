import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  scroll: boolean = false;

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:rezide', ['$event'])
  checkScroll(){
    const scrollHeight = document.documentElement.scrollHeight;//tamanho do conteudo
    const clientHeight = document.documentElement.clientHeight;//tamanho da janela
    this.scroll = scrollHeight <= clientHeight;
  }
}
