import { Component, OnInit } from '@angular/core';
import { Usersettings } from '../usersettings';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { login } from '../loginobject';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id = 0
  msg = ""
  status = 1

  loginsettings: login = {
    username: null,
    password: null
  }

  constructor(private dataservice: DataService, private authservice: AuthService) { }

  ngOnInit(): void {
  }



  onSubmit(form: NgForm) {

    console.log("UserLogin Here..!!")
    console.log(this.loginsettings)


    this.dataservice.loginmethod(this.loginsettings).subscribe(
      result => this.setStatus(result),
      error => console.log(error)
    );

  }

  setStatus(result) {
    this.msg = result.message;
    this.status = result.status;
    if (this.status == 1) { this.authservice.login() }

  }

}
