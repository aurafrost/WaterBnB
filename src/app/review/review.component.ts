import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  listing:any;
  constructor(private service:RestService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.service.getListingById(this.route.snapshot.params.id).subscribe(data=>{
      this.listing=data;
    })
  }

}
