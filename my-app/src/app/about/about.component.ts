import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  
  users=[]
  
  
  constructor(private dataService:DataService,public authservice:AuthService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      result=>this.users=result,
      error=>console.log(error)
    );
    
  }

}
