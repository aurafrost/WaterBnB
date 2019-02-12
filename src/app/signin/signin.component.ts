import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user:User;
  fName:string;
  lName:string;
  email:string;
  password:string;
  constructor(private service:RestService) { }

  ngOnInit() {
  }

}
