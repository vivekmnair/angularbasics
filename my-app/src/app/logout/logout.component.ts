import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service'
import { Usersettings } from '../usersettings'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  users=[]

  constructor(public authservice:AuthService, private dataservice:DataService) { }

  ngOnInit(): void {
   this.authservice.logout();
   this.dataservice.logout().subscribe(
    result=>this.users=result,
    error=>console.log(error)
    );
  }

}
