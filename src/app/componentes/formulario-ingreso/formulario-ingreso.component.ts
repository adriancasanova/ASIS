import { Component, OnInit } from '@angular/core';
import { SelectService } from 'src/app/servicios/select.service';
import {DATA} from '../../data'
@Component({
  selector: 'app-formulario-ingreso',
  templateUrl: './formulario-ingreso.component.html',
  styleUrls: ['./formulario-ingreso.component.css']
})
export class FormularioIngresoComponent implements OnInit {
  public data: any = DATA;
  inputvalueNombre = "";
  inputvalueApellido = "";
  inputvalueObservaciones = "";
  

  constructor(private selectService: SelectService) { 
    selectService.traerSelectPersonalizado(["select-personalizado"]) 
  }
  model: any = {};
  ngOnInit(): void {
    
  }

  nuevoIngreso(): void {
    this.data.push(this.model);
    console.log(this.model)
   }


  mayus(e: any) {
    console.log(e)
    e.value = e.value.UpperCasePipe;
   
}

}
