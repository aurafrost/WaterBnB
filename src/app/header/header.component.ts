import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:User;
  constructor(private service:RestService,
    private router:Router) { }

  ngOnInit() {
    
  }

  checkStatus(){
    this.user=this.service.getCurrentUser();
    if(this.user==null||this.user.type=="Guest"){
      this.router.navigate(["/"]);
    }
    else{
      this.router.navigate(["host"]);
    }
  }

  checkStatusLogin(){
    this.user=this.service.getCurrentUser();
    if(this.user==null){
      this.router.navigate(["/guest/signin"]);
    }
    else if(this.user.type=="Guest"){

    }
    else{
      
    }
  }

  logout(){
    this.service.setCurrentUser(null);
    this.router.navigate(['/']);
  }
}
