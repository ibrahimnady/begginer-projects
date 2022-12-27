import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string = "ahmed";
  isSale: Boolean = true;
  salary: number = 5000;
  friends: string[] = ["ibrahim", "ahmed", "ziad"];
  users: any[] = [
    { name: "ahmed", age: 27, salary: 10000, gender: "male"},
    { name: "ibrahim", age: 24, salary: 6000, gender: "male"},
    { name: "ziad", age: 17, salary: 2500, gender: "male"},
    { name: "mona", age: 20, salary: 5000, gender: "female"},
    { name: "hhestorya", age: 20, salary: 4000, gender: "female"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
