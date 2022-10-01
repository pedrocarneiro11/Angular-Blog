import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/06/tony-stark-endgame-snap.jpg"
  contentTitle:string="MEU ARTIGO"
  description:string="MEU PARAGRAFO"

  constructor() { }

  ngOnInit(): void {
  }

}
