import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  listing:Observable<Listing>;
  reviews:Observable<Review[]>;
  constructor(private service:RestService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    // this.listing=this.service.getListingById(this.route.snapshot.params.id);
    this.id=this.route.snapshot.params.id;
    this.listing=this.service.getListingById(this.id);
    this.reviews=this.service.getReviews();
  }
}
