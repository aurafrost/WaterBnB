import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../model/Listing';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  pools: Observable<Listing[]>;

  constructor(private service: RestService) { }

  ngOnInit() {
    this.pools=this.service.getListings();
  }

  search(string){
    this.pools=this.service.searchListings(string);
  }
}
