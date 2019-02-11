import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from '../services/rest.service';
import { Listing } from '../model/Listing';

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.scss']
})
export class PoolsComponent implements OnInit {
  listing:Observable<Listing>;
  constructor(private service:RestService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.listing=this.service.getListingById(this.route.snapshot.params.id);
  }
}
