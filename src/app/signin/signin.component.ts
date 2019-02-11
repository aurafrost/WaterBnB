import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user:User;
  constructor() { }

  ngOnInit() {
  }

  register(event){
    this.user.fName=event.target.fName;
    console.log(event.target.fName)
  }
}
