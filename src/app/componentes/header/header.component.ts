import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  rutaEnvio: any;
  @Output() messageEventRuta = new EventEmitter<string>();
  constructor(private router: Router, private autenticacionService:AutenticacionService) { }

  ngOnInit(): void {
  }

  Logueado(route: string) {
    return this.router.url === route;
  }

  enviarRuta() {     
    this.messageEventRuta.emit(this.rutaEnvio)
  }

  desloguear() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUser');
    this.autenticacionService.currentUserSubject.next(null);
    this.router.navigate(['/login']);   
    this.enviarRuta()
}

}
