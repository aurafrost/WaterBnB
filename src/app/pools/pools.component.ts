import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from '../services/rest.service';
import { Listing } from '../model/Listing';
import { Review } from '../model/Review';

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.scss']
})
export class PoolsComponent implements OnInit {
  id: number;
  listing: any;
  listingOwner: any;
  user: any;
  reviews: any;
  constructor(private service: RestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.user = this.service.getCurrentUser();
    this.id = this.route.snapshot.params.id;

    this.service.getListingById(this.id).subscribe(data => {
      this.listing = data;
      //not getting user from listing
      // console.log("ngoninit: " + this.listing.user_id);
      // this.listingOwner = this.service.getUserById(data.user);
    })
    // this.reviews = this.service.getReviewsByListing(this.id);
    this.service.getReviewsByListing(this.id).subscribe(data=>{
      this.reviews=data;
    });
  }

  checkUser() {
    //check and redirect accordingly
    if(this.service.getCurrentUser()==null){
      this.router.navigate(["/guest/signin"]);
    }
    else {
      this.router.navigate(["/review/" + this.listing.listingId]);
    }
  }
}
