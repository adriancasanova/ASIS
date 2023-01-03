import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {IngresoPersona} from '../ingresoPersona'
@Injectable({
  providedIn: 'root'
})
export class TablaRecepcionService {
  private apiUrl: string = 'http://localhost:8080/ingresoPersona';
  constructor(private http: HttpClient) { }


  getTablaRecepcion() {
    return this.http.get<IngresoPersona[]>(this.apiUrl)
    .pipe(map((res: any) => {
      return res; 
    }))
  }

  
postTablaRecepcion(ingresoPersona: IngresoPersona) {
  return this.http.post<IngresoPersona[]>(this.apiUrl, ingresoPersona)
  .pipe(map((res: any) => {
    //console.log(res)
    return res; 
  }))
}


updateTablaRecepciont(ingresoPersona: IngresoPersona, id: number) {
  return this.http.put<IngresoPersona[]>(this.apiUrl + id, ingresoPersona)
  .pipe(map((res: any) => {
    return res; 
  
  }))
}

deleteTablaRecepcion(id: number) {
  return this.http.delete<IngresoPersona[]>(this.apiUrl + id)
  .pipe(map((res: any) => {
    return res; 
  }))
}

  

}

