import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../model/Review';
import { User } from '../model/User';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  listing:any;
  reviewObject:Review=new Review();
  review:any;
  rating:any;
  user:User;

  constructor(private service:RestService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.user=this.service.getCurrentUser();
    this.service.getListingById(this.route.snapshot.params.id).subscribe(data=>{
      this.listing=data;
    })
  }

  submitReview(review,rating){
    this.reviewObject.name=this.user.fName+" "+this.user.lName;
    this.reviewObject.rating=rating;
    this.reviewObject.review=review;
    this.service.addReview(this.route.snapshot.params.id,this.reviewObject).subscribe(data=>{});
    this.router.navigate(["/"]);
  }
}
