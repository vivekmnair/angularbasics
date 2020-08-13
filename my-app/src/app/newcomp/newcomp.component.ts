import { Component, OnInit } from '@angular/core';
import { course } from './newcomp.model';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styles: [
  ]
})
export class NewcompComponent implements OnInit {

  test = "a variable is created"
  courses = []
  test1 = []
  testname = ""
  testname2 = ""
  compname = "angular"
  compdesc = "the best"


  constructor() { }

  ngOnInit(): void {
    console.log("executed this many times")

    let course1 = new course("python", "complete");
    this.courses.push(course1);

    let course2 = new course("ml", "machine learning");
    this.courses.push(course2);

    course2 = new course("java", "java v 7.2.1");
    this.courses.push(course2);

  }

  addCourse() {
    let c = new course(this.compname, this.compdesc)
    this.courses.push(c);
    this.compname="";
    this.compdesc="";

  }
}
