import { Component, OnInit } from '@angular/core';
import { Listing } from '../model/Listing';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listing:Listing=new Listing();
  user:User;
  address:string;
  cost:number;
  details:any;
  description:string;
  poolSize:string;
  listings:any;
  constructor(private service:RestService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.user=this.service.getCurrentUser();
    if(this.user==null){
      this.router.navigate(['/']);
    }
    this.listings=this.service.getListingsByUser(this.user);
    // this.service.getListingsByUser(this.user).subscribe(data=>{
    //   this.listings=data;
    // });
  }

  addListing(address,description,cost,poolSize){
    this.listing.address=address;
    this.listing.cost=cost;
    this.listing.details="4.0";
    this.listing.email=this.user.email;
    this.listing.name=this.user.fName+" "+this.user.lName;
    this.listing.poolSize=poolSize;
    this.listing.description=description;
    this.listing.userId=this.user.userId;
    this.service.addListing(this.listing);
    console.log("Listing added.");
    this.router.navigate(['host']);
  }
}
