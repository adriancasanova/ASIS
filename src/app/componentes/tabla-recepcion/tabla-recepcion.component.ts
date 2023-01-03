import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IngresoPersona } from 'src/app/ingresoPersona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { HelperServiceService } from 'src/app/servicios/helper-service.service';
import { TablaRecepcionService } from 'src/app/servicios/tabla-recepcion.service';
import {DATA} from '../../data'

@Component({
  selector: 'app-tabla-recepcion',
 
  templateUrl: './tabla-recepcion.component.html',
  styleUrls: ['./tabla-recepcion.component.css']
})
export class TablaRecepcionComponent implements OnInit  {
  mensaje!: string;
  editMessage!: string;
  @Input() textFromParent!: any;

  message!:string;

  

  receiveMessage(event: any) {
    this.getRecepcionPersona()
    this.message = event
  }
 
  //@Input() childMessage!: any;
  ingresoPersona!: IngresoPersona;
  //ingresoPersona!: IngresoPersona;
  inputBuscar = "";
  filterPost = '';
  ingresoPersonaModel: IngresoPersona = new IngresoPersona();
  formValue !: FormGroup;
  formValueAgregar !: FormGroup;
  recepcionData!: any;
  userData: any;
 @Input() data: any;  
  constructor(private tablaRecepcionService: TablaRecepcionService, private autenticacionService:AutenticacionService,
    private formBuilder: FormBuilder, private render2: Renderer2,  private helperService: HelperServiceService ) { }
 // model: any = {};
  ngOnInit(): void {
    this.helperService.customMessage.subscribe(msg => this.message = msg);
    this.getRecepcionPersona()

   
   
  }






  getRecepcionPersona() {
    this.tablaRecepcionService.getTablaRecepcion().subscribe((res: any) => {
      this.recepcionData = res;
   
    });
  }


  @ViewChild('actualizacionDeEstado', { static: false }) divActualizacionDeEstado!: ElementRef;

clicklistenerProspecto: any;

public inputContentProspecto: any;

ngAfterViewInit() { 
  // Escuchando el select personalizado de tipo de prospecto
   this.clicklistenerProspecto = this.render2.listen(this.divActualizacionDeEstado.nativeElement, 'change', (evt) => {  
  //  this.inputContentProspecto = document.querySelector(".algo")?.textContent;
  this.inputContentProspecto = document.querySelector(".algo"); 
    console.log("el valor es:" + this.inputContentProspecto.value);
    this.inputContentProspecto.blur();
  
    
   
    
    


  }); 
   // Escuchando el select personalizado de tipo de prospecto
  
   
  
     
      
      
 
  }
  
}
