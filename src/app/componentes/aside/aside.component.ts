import { Component, OnInit } from '@angular/core';
import { HelperServiceService } from 'src/app/servicios/helper-service.service';
import { SelectService } from 'src/app/servicios/select.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
    constructor(private selectService: SelectService,  private helperService: HelperServiceService ) { 
      selectService.traerSelectPersonalizado(["select-personalizado"]) 
  }
  message!: string;
  editMessage!: string;
  ngOnInit(): void {
   // this.helperService.customMessage.subscribe(msg => this.message = msg);
  }
  /* changeMessage() {
    this.helperService.changeMessage(this.editMessage);
  } */

}
