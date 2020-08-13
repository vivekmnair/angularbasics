import { Component, OnInit } from '@angular/core';
import { Usersettings } from '../usersettings';
import { NgForm} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    msg=""
    status=1

    userSettings:Usersettings={
      name:null,
      email:null,
      password:null
    }
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log("form submitted")
    console.log(this.userSettings)

    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result=>this.setStatus(result),
      error=>console.log(error)
    );
    
  }
  setStatus(result){
    this.msg= result.message;
    this.status= result.status;
  }


}
