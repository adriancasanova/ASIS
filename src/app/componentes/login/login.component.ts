import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private credenciales!: string;  
  public loading!: boolean;
  public loginForm!: FormGroup;
  @ViewChild ('alerta') pruebas!: ElementRef;
  @ViewChild ('crearElemento') eyes!: ElementRef;
  constructor(
    private formBuilder: FormBuilder,  
    private http: HttpClient,
    private ruta: Router,
    private autenticacionService:AutenticacionService, 
    private render2: Renderer2
  ) {
  
    this.loginForm=this.formBuilder.group({
      email: [''],
      password: [''],
      }) 

  }

  ngOnInit(): void {
   
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
    this.ruta.navigate(['/recepcion']);     
    this.credenciales = data;
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

}
