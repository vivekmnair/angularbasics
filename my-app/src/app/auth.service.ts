import { Injectable } from '@angular/core';
import { Router, RouterModule} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false


  constructor(private router:Router) { }

  login(){
    this.authenticated= true
    this.router.navigate(['/additionalsettings']);
  }
  logout(){
    this.authenticated= false
    this.router.navigate(['/logout']);
  }
}


