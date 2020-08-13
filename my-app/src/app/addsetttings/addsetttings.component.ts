import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-addsetttings',
  templateUrl: './addsetttings.component.html',
  styles: [
  ]
})
export class AddsetttingsComponent implements OnInit {

  users=[]
  
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(
      result=>this.users=result,
      error=>console.log(error)
    );
  }

  deleteUser(User) {
    console.log("got id", User.id)
    this.dataService.deleteUserSettingsFormById(User.id).subscribe(
      result=>this.users=result,
      error=>console.log(error)
    );
  }

  

}
