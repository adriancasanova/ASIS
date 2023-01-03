import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../login';
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="http://localhost:8080/login/";
  urlGetUsuarios = "http://localhost:8080/usuarioGet";
  
  currentUserSubject: BehaviorSubject<any>;
  //public currentUser!: Observable<Login>;
  headers = new HttpHeaders();
  
  
    constructor(private http: HttpClient) { 
  //console.log("El servicio de autenticacion esta corriendo" );
  this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('currentUser')|| '{}');
  //this.currentUser = this.currentUserSubject.asObservable();
 // this.headers.append('content-type', 'application/json')
  this.headers.append('Authorization', 'Bearer' + sessionStorage.getItem('currentUser.token'))

 
  }
    iniciarSesion(credenciales:any):Observable<any> {  
    return this.http.post(this.url, credenciales/*, { responseType: 'text' }*/).pipe(map(data =>{
     // data.split(',');
    
   
     
    // console.log(data[i]);
     
      sessionStorage.setItem('currentUser', JSON.stringify(data));   
     
      this.currentUserSubject.next(data);   
     
      return data;   
    })) 
  }
  
  get UsuarioAutenticado() {         
    return this.currentUserSubject.value;      
  } 

  
  //traer usuario para tomar el rol para
  getUsuario(credenciales: any){    
    return this.http.get<Usuario[]>(this.urlGetUsuarios, credenciales)
    .pipe(map((res: any) => {     
      return res; 
    }))
  } 

  
  }