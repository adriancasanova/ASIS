import { Component, OnInit } from '@angular/core';
import { HelperServiceService } from 'src/app/servicios/helper-service.service';

@Component({
  selector: 'app-tabla-vendedor',
  templateUrl: './tabla-vendedor.component.html',
  styleUrls: ['./tabla-vendedor.component.css']
})
export class TablaVendedorComponent implements OnInit {
  name: string = "Martin" 
  turno: string = "2"
 // message!: string;
 // editMessage!: string;

  constructor(private helperService: HelperServiceService) { }

  ngOnInit(): void {
   // this.helperService.customMessage.subscribe(msg => this.message = msg);
  }

}
