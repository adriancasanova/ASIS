import { Component, OnInit } from '@angular/core';
import {DATA} from '../../data'
@Component({
  selector: 'app-tabla-recepcion',
  templateUrl: './tabla-recepcion.component.html',
  styleUrls: ['./tabla-recepcion.component.css']
})
export class TablaRecepcionComponent implements OnInit {
  public data: any = DATA; 
  constructor() { }
  model: any = {};
  ngOnInit(): void {
  }

  findAll() {
    this.data.find(this.model)
  }

}
