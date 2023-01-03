import { Component, ElementRef, OnInit, ViewChild, Renderer2, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IngresoPersona } from 'src/app/ingresoPersona';
import { HelperServiceService } from 'src/app/servicios/helper-service.service';

import { SelectService } from 'src/app/servicios/select.service';
import { TablaRecepcionService } from 'src/app/servicios/tabla-recepcion.service';
import { TablaRecepcionComponent } from '../tabla-recepcion/tabla-recepcion.component';

@Component({
  selector: 'app-formulario-ingreso',
  templateUrl: './formulario-ingreso.component.html',
  styleUrls: ['./formulario-ingreso.component.css']
})
export class FormularioIngresoComponent implements OnInit { 
 /* textToChild = () => ({   
  tipoDeProspecto: [''],
  nombreApellido: [''],
  dni: [''],
  nroContacto: [''],
  motivo: [''],
  departamento: [''],
  procedencia: [''],
  empleado: [''],
  observaciones: [''] }); */

  //textToChild: any = "";
  textToChild: any = false;
  message!: string;
  editMessage!: string;

  @Output() messageEvent = new EventEmitter<string>();

  

  sendMessage() {  
    this.messageEvent.emit(this.message)
  }
  
  @ViewChild('datosDesdeElPadre') datosDesdeElPadre!: TablaRecepcionComponent;
 // @Input() ingresoPersona!: IngresoPersona;
// @Output() messageEvent = new EventEmitter<string>();
// parentMessage =  this.prueba()
/*******************************PRONCIPIO PRUEBA */
inputBuscar = "";
filterPost = '';

public data: any; 
/*******************************FIN PRUEBA*/ 


  @ViewChild ('prueba') pruebas!: ElementRef;
  //@ViewChild ('eye') eyes!: ElementRef;
  inputBuscarFormulario = "";
  ingresoPersonaModel: IngresoPersona = new IngresoPersona();
  experienciaModelObj: IngresoPersona = new IngresoPersona();
  formValue !: FormGroup;
  formValueAgregar !: FormGroup;

  inputvalueNombre = "";
  inputvalueApellido = "";
  inputvalueObservaciones = "";
  tipoDeProspecto = "";
  recepcionData: any;
  public inputContentProspecto: any;
  public inputContentMotivo: any;
  public inputContentDepartamento: any;
  public inputContentProcedencia: any;
  public inputContentEmpleado: any;
  
  constructor(private selectService: SelectService,private render2: Renderer2,
     private formBuilder: FormBuilder, private tablaRecepcionService: TablaRecepcionService,
      private elem: ElementRef, private helperService: HelperServiceService) { 
    selectService.traerSelectPersonalizado(["select-personalizado"]) 
  }
  model: any = {};
  ngOnInit(): void {
   // this.getRecepcionPersona()
 //  this.helperService.customMessage.subscribe(msg => this.message = msg);
    this.formValueAgregar = this.formBuilder.group({
      tipoDeProspecto: [''],
      nombreApellido: [''],
      dni: [''],
      nroContacto: [''],
      motivo: [''],
      departamento: [''],
      procedencia: [''],
      empleado: [''],
      observaciones: ['']
    })

    
   
    
  }

/*
prueba() {
  this.tablaRecepcionService.getTablaRecepcion().subscribe((res: any) => {
    this.recepcionData = res;  
    console.log(res) 
  });

} */





  mayus(e: any) {
    console.log(e)
    e.value = e.value.UpperCasePipe;   
}

postExperienciaDetails(){  
  this.ingresoPersonaModel.tipoDeProspecto = this.inputContentProspecto;
 // this.ingresoPersonaModel.tipoDeProspecto = this.formValueAgregar.value.tipoDeProspecto;
  this.ingresoPersonaModel.nombreApellido = this.formValueAgregar.value.nombreApellido;
  this.ingresoPersonaModel.dni = this.formValueAgregar.value.dni;
  this.ingresoPersonaModel.nroContacto = this.formValueAgregar.value.nroContacto;
  //this.ingresoPersonaModel.motivo = this.formValueAgregar.value.motivo;
  this.ingresoPersonaModel.motivo = this.inputContentMotivo;
  //this.ingresoPersonaModel.departamento = this.formValueAgregar.value.departamento;
  this.ingresoPersonaModel.departamento = this.inputContentDepartamento;
  //this.ingresoPersonaModel.procedencia = this.formValueAgregar.value.procedencia;
  this.ingresoPersonaModel.procedencia = this.inputContentProcedencia;
  //this.ingresoPersonaModel.empleado = this.formValueAgregar.value.empleado;
  this.ingresoPersonaModel.empleado = this.inputContentEmpleado;
  this.ingresoPersonaModel.observaciones = this.formValueAgregar.value.observaciones;

//  this.ingresoPersonaModel.tipoDeProspecto = this.formValueAgregar.get("tipoDeProspecto");

  
  this.tablaRecepcionService.postTablaRecepcion(this.ingresoPersonaModel).subscribe(res =>{
  //  console.log(res);     
 //   let ref = document.getElementById('cancel')
 //   ref?.click();
   // this.textToChild = this.ingresoPersonaModel;
   this.textToChild = true;
  
   //limpia los formularios despues del envio
    this.formValueAgregar.reset();
    this.vaciarSelect()
    this.sendMessage()
  //  this.datosDesdeElPadre.estollegadelpadre = JSON.stringify(this.ingresoPersonaModel);
 // this.datosDesdeElPadre.estollegadelpadre = this.getRecepcionPersona();
   
  /*  const prueba = this.pruebas.nativeElement
   // this.render2.removeClass(prueba, 'selectProspecto')
   this.render2.removeAttribute(prueba, 'class','active') */
  }) 
} 

vaciarSelect() { 
    const newContent = '';  
    const element = this.elem.nativeElement.querySelector('.tituloProspecto');  
    this.render2.setProperty(element, 'innerHTML', newContent);  
  
  /*
    this.formValueAgregar.reset();
    const prueba = this.pruebas.nativeElement
   // this.render2.removeClass(prueba, 'selectProspecto')
   this.render2.removeClass(prueba, 'tituloProspecto') */
}


getRecepcionPersona() {
  this.tablaRecepcionService.getTablaRecepcion().subscribe((res: any) => {
    this.recepcionData = res;   
    
  });
} 

/*
capturarFile(event: any) {  
 
  console.log("archivo capturado " + event.target.value)
//  const archivoCapturado = event.atributes.ownerElement.value;
//  console.log("archivo capturado" + archivoCapturado)
const archivoCapturado = event
console.log("archivo capturado" + this.archivoCapturado);

} */

/*
change(): void {   
  console.log("change")
  //const prueba = this.pruebas.nativeElement;    
  const eye = this.eyes.nativeElement;   
 //this.render2.setAttribute(eye, 'value', this.inputContent);  
 //this.render2.setAttribute(prueba, 'class', 'color')
 // console.log(eye)
  //console.log("El valor de inputContent es: " + this.inputContent)
} */


@ViewChild('opcionesProspectoListen', { static: false }) divOpcionesProspectoListen!: ElementRef;
@ViewChild('opcionesListen', { static: false }) divOpcionesListen!: ElementRef;
@ViewChild('opcionesDepartamentoListen', { static: false }) divOpcionesDepartamentoListen!: ElementRef;
@ViewChild('opcionesProcedenciaListen', { static: false }) divOpcionesProcedenciaListen!: ElementRef;
@ViewChild('opcionesEmpleadoListen', { static: false }) divOpcionesEmpleadoListen!: ElementRef;
clicklistenerProspecto: any;
clicklistenerMotivo: any;
clicklistenerDepartamento: any;
clicklistenerProcedencia: any;
clicklistenerEmpleado: any;

ngAfterViewInit() { 
  // Escuchando el select personalizado de tipo de prospecto
   this.clicklistenerProspecto = this.render2.listen(this.divOpcionesProspectoListen.nativeElement, 'click', (evt) => {  
    this.inputContentProspecto = document.querySelector(".tituloProspecto")?.textContent;
  });   
  // Escuchando el select personalizado de motivo
  this.clicklistenerMotivo = this.render2.listen(this.divOpcionesListen.nativeElement, 'click', (evt) => {  
    this.inputContentMotivo = document.querySelector(".titulo")?.textContent; 
  }); 
// Escuchando el select personalizado de departamento
this.clicklistenerDepartamento = this.render2.listen(this.divOpcionesDepartamentoListen.nativeElement, 'click', (evt) => {  
  this.inputContentDepartamento = document.querySelector(".tituloDepartamento")?.textContent; 
}); 
// Escuchando el select personalizado de procedencia
this.clicklistenerProcedencia = this.render2.listen(this.divOpcionesProcedenciaListen.nativeElement, 'click', (evt) => {  
  this.inputContentProcedencia = document.querySelector(".tituloProcedencia")?.textContent; 
}); 
// Escuchando el select personalizado de empleado
this.clicklistenerEmpleado = this.render2.listen(this.divOpcionesEmpleadoListen.nativeElement, 'click', (evt) => {  
  this.inputContentEmpleado = document.querySelector(".tituloEmpleado")?.textContent; 
}); 

}
ngOnDestroy() {
  this.clicklistenerProspecto.unsubscribe();
  this.clicklistenerMotivo.unsubscribe();
  this.clicklistenerDepartamento.unsubscribe();
  this.clicklistenerProcedencia.unsubscribe();
  this.clicklistenerEmpleado.unsubscribe();

}



  /*
  onToggle(ingresoPersona: IngresoPersona){
    console.log("onToggle")
    this.onToggleReminder.emit(ingresoPersona);
  } 

  toggleReminder(ingresoPersona: IngresoPersona) {  
    console.log("jhgjhg")
    this.tablaRecepcionService.getTablaRecepcion().subscribe();
    } 
*/
}
