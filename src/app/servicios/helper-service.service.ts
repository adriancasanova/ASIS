import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {
  private mensaje = new BehaviorSubject<string>('');
  public customMessage = this.mensaje.asObservable();

  constructor(private http: HttpClient) { }
  
  public changeMessage(msg: string): void {
    this.mensaje.next(msg);
  }

  private apiUrl: string = 'http://localhost:8080/horaIngreso';
 


  getHoraIngreso() {
    return this.http.get(this.apiUrl)
    .pipe(map((res: any) => {
      return res; 
    }))
  }

  
postHoraIngreso(horaIngreso: any) {
  return this.http.post(this.apiUrl, horaIngreso)
  .pipe(map((res: any) => {
    //console.log(res)
    return res; 
  }))
}




deleteTablaRecepcion(id: number) {
  return this.http.delete(this.apiUrl + id)
  .pipe(map((res: any) => {
    return res; 
  }))
}


}


