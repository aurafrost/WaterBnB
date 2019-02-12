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
  id:number;
  listing:any;
  user:any;
  reviews:Observable<Review[]>;
  constructor(private service:RestService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params.id;
    this.service.getListingById(this.id).subscribe(data=>{
      this.listing=data;
      console.log("listing fetched")
      //get user from listing
      // this.service.getUserById(this.listing.userId).subscribe(data=>{
      //   console.log("From listing - user id: "+this.listing.userId)
      //   this.user=data;
      // });
    });
    this.reviews=this.service.getReviews();
  }

  checkUser(){
    //check

    //redirect accordingly
    this.router.navigate(["/review/"+this.listing.listingId]);
  }
}
