import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user: User = new User();
  type: string;
  fName: string;
  lName: string;
  email: string;
  password: string;

  signinemail: string;
  signinpassword: string;
  errormsg: string;
  constructor(private service: RestService,
    private router: Router) { }

  ngOnInit() {
  }

  register(type, fName, lName, email, password) {
    this.user.type = type;
    this.user.fName = fName;
    this.user.lName = lName;
    this.user.email = email;
    this.user.password = password;
    this.service.registerUser(this.user).subscribe(data => { });
    console.log("registering...");
    this.router.navigate(["/"]);
  }

  login(signinemail, signinpassword) {
    this.service.getUserByEmail(signinemail).subscribe(data => {
      console.log("Returning email: " + data.email);
      if (data == null) {
        this.errormsg = "Unregistered email.";
      }
      else if (data.password != signinpassword) {
        this.errormsg = "Wrong password";
      }
      else {
        //hold user in session
        this.service.setCurrentUser(data);
        console.log("Signed in as " + data.email);
        //navigate to dashboard if host
        if (data.type=="Host") {
          this.router.navigate(["host"]);
        }
        //navigate to home if guest
        else {
          this.router.navigate(["/"]);
        }
      }
    });
  }
}
