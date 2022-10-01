import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css', './menu-title.responsive.component.css']
})
export class MenuTitleComponent implements OnInit {
  Titulo:string= "MARVEL BLOG"

  constructor() { }

  ngOnInit(): void {
  }

}
