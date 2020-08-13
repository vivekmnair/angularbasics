import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usersettings } from '../usersettings';
import { NgForm} from '@angular/forms';
import { DataService } from '../data.service';



@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  id = 0

  msg=""

  status=0

  Usersettings:Usersettings={
    name:null,
    email:null,
    password:null
  }


  constructor(private router: Router, private route: ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    console.log("inside ng on it")
    this.id=this.route.snapshot.params['id'];
    console.log("got id",this.id)
    
    this.dataService.editUserSettingsFormById(this.id).subscribe(
      result=>this.setuserdetails(result), 
      error=>console.log(error)
    );

    
      
  }

  onSubmit(form:NgForm) {
    console.log("form submitted")
    console.log(this.Usersettings)

    this.dataService.posteditUserForm(this.Usersettings,this.id).subscribe(
      result=>this.setStatus(result),
      error=>console.log(error)
    );
    
  }
  setStatus(result){
    this.msg= result.message;
    this.status= result.status;
  }

  setuserdetails(result){
    
    let user=result.users[0]
    this.Usersettings.name=user.name
    this.Usersettings.email=user.email
    this.Usersettings.password=user.password

  }
    
    

    
    
  
}
