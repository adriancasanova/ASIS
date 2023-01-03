import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import {Usuario} from '../../login'
import { HelperServiceService } from 'src/app/servicios/helper-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fechaactual = new Date().toLocaleTimeString();  
  userData !: any;
  arrayHoraDeIngresoVendedor: any = [].sort();
  nombreVendedor!: any;
  private credenciales!: string;  
  public loading!: boolean;
  public loginForm!: FormGroup;
  mensaje!: string;
  editMessage!: string;

  @ViewChild ('alerta') pruebas!: ElementRef;
  @ViewChild ('crearElemento') eyes!: ElementRef;
  constructor(
    private formBuilder: FormBuilder,  
    private http: HttpClient,
    private ruta: Router,
    private autenticacionService:AutenticacionService, 
    private render2: Renderer2,
    private helperService: HelperServiceService  ) {
  
    this.loginForm=this.formBuilder.group({
      email: [''],
      password: [''],
      }) 

  }

  ngOnInit(): void {
    this.helperService.customMessage.subscribe(msg => this.mensaje = msg);
  }
  changeMessage() {
    this.helperService.changeMessage(this.editMessage);
   
  } 

  postHoraIngreso(editMessage: any) {
    this.helperService.postHoraIngreso(editMessage).subscribe(res => {
      console.log("Esto es para ver si la hora  se esta pusheando" + res);
    })
  }


get Email() {
  return this.loginForm.get('email');
}

get Password() {
  return this.loginForm.get('password');
}

login(event: Event) { 
  this.loading = true;
  event.preventDefault;
  this.autenticacionService.iniciarSesion(this.loginForm.value).subscribe(data =>{
  // console.log("DATA: " + JSON.stringify(data));  
     
    this.credenciales = data;       
    
    let rol = Object.values(data); 
    for(let i=0; i< 1; i++){
     
      if (rol[0] === "recepcionista") {       
        this.ruta.navigate(['/recepcion']);       
        
      } if (rol[0] === "vendedor"){
        this.ruta.navigate(['/recepcion']);  
        this.horaLogueo(this.fechaactual); 
        this.arrayHoraDeIngresoVendedor.push(rol[2], this.fechaactual)   
        this.postHoraIngreso(this.editMessage);
      }   
       // this.nombreVendedor = rol[2]; 
       this.editMessage = this.arrayHoraDeIngresoVendedor;
      
       this.changeMessage();
       
    //  }
    }
   // this.credenciales.split(',');
   // console.log(this.credenciales[1]) 
  //  this.getUsuario(this.credenciales)
  })
  
  if (this.credenciales == null) {
    this.loading = false;     
   // alert("no se pudo iniciar sesion")
    this.crearAlerta()   
  } 
 

}

crearAlerta() {   
   const prueba = this.pruebas.nativeElement;    
  const eye = this.eyes.nativeElement;   
 this.render2.createElement(prueba, 'h2');  
 this.render2.setAttribute(eye, 'h1', 'bi bi-eye-fill')
 // let text = this.render2.createText("my button");
  this.render2.appendChild(prueba, "algo jhjhg");
 console.log(eye, prueba)
}

horaLogueo(fecha: any) {  
  console.log(fecha)
 }

 /* getUsuario(credenciales: any) {
  this.autenticacionService.getUsuario(credenciales).subscribe((res: any) => {
    this.userData = res;   
    console.log(res)
  });
} */





}
