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
  newListing: Listing = new Listing();
  user: User;
  address: any;
  cost: any;
  description: any;
  poolSize: any;
  listings: any;
  tempUser: any;
  constructor(private service: RestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.user = this.service.getCurrentUser();
    if (this.user == null) {
      this.router.navigate(['/']);
    }
    this.listings = this.service.getListingsByUser(this.user.userId);
  }

  addListing(address, description, cost, poolSize) {
    this.newListing.address = address;
    this.newListing.cost = cost;
    this.newListing.poolSize = poolSize;
    this.newListing.description = description;
    this.newListing.email = this.user.email;
    this.newListing.name = this.user.fName + " " + this.user.lName;
    this.newListing.review = null;
    this.newListing.user = this.service.getUserById(this.user.userId);
    this.service.addListing(this.user.userId, this.newListing).subscribe(data => { });
    //add listing through service
    console.log("Listing added.");
    //not quite working. listings reload before the add occurs.
    this.listings = this.service.getListingsByUser(this.user.userId);
  }
}
