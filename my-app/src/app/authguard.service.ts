import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router:Router,private authservice:AuthService) {}

  public canActivate(route: ActivatedRouteSnapshot){
    let auth = this.authservice.authenticated
    console.log(auth)
    if(auth == true){
      return true;
      }
      
    this.router.navigate(['/login']);
  }
   
}
