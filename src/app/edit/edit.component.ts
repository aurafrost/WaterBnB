import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Review } from '../model/Review';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id:number;
  listing:any;
  user:any;
  reviews:Observable<Review[]>;

  //for edit
  description:any;
  poolSize:any;
  cost:any;
  constructor(private service:RestService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.user=this.service.getCurrentUser()
    this.id=this.route.snapshot.params.id;
    this.service.getListingById(this.id).subscribe(data=>{
      this.listing=data;
      this.description=this.listing.description;
      this.poolSize=this.listing.poolSize;
      this.cost=this.listing.cost;
    });
    this.reviews=this.service.getReviews();
  }

  edit(description,poolSize,cost){
    this.listing.description=description;
    this.listing.poolSize=poolSize;
    this.listing.cost=cost;
    this.service.updateListing(this.listing);
    this.router.navigate(["host"]);
  }
}
