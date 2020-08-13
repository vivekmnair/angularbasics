import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usersettings } from '../usersettings';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  id = 0

  msg = ""

  email= ""

  status = 0

  searchuse: Usersettings = {
    name: null,
    email: null,
    password: null
  }

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    console.log("UserLogin Here..!!")
    console.log(this.searchuse)


    this.dataService.searchuserform(this.searchuse).subscribe(
      result => this.setuserdetails(result),
      error => console.log(error)
    );

  }

  setuserdetails(result){
    this.msg=""
    this.email=""
    if(result.users.length>0)
      { let user=result.users[0]
        this.email=user.email
      
      }
    else
      {
      this.msg = result.msg;
      }
  }
    


}
